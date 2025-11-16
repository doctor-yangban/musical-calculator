import Soundfont from 'soundfont-player';
import MidiPlayer from 'midi-player-js';
import global from './global';
export default {
    mixins: [global],
    data: function () {
        var AudioContext = window.AudioContext;
        return {
            config: {},
            ac: new AudioContext(),
            player: null,
            instrument: null,
            currKeys: {},
            midiplayer: null,
            midiFile: null,
            playMidiFuncs: [],
        }
    },
    methods: {
        initPlayer: function (cbfunc) {
            for (var noteName of this.noteNames) {
                this.currKeys[noteName] = false;
            }
            Soundfont.instrument(this.ac, "AR-7778", {
                soundfont: 'FluidR3_GM', from: 'chonggi-tokhu.github.io/AR-7778/audio/', nameToUrl: function (name, sf, format) {
                    format = format === "ogg" ? format : "mp3";
                    sf = sf === "FluidR3_GM" ? sf : "MusyngKite";
                    return "https://chonggi-tokhu.github.io/AR-7778/audio/" + sf + "/" + name + "-" + format + ".js";
                }
            }).then((instrument) => {
                this.instrument = instrument;
                this.midiplayer = new MidiPlayer.Player();
                if (this.isFunc(cbfunc)) {
                    cbfunc(instrument);
                }
            });
        },
        playNote: function (noteName) {
            if (this.instrument !== null) {
                var playingId = this.instrument.play(noteName, this.ac.currentTime, { duration: this.config?.duration || 800 });
                this.currKeys[noteName] = playingId;
            }
        },
        stopNote: function (noteName) {
            if (!this.currKeys[noteName]) {
                return;
            }
            this.instrument.stop(0, [this.currKeys[noteName]]);
            this.currKeys[noteName] = false;
        },
        readFile: function (file) {
            var reader = new FileReader();
            if (file) {
                reader.readAsArrayBuffer(file);
            }
            reader.addEventListener("load", (ev) => {
                this.midiFile = reader.result;
            });
        },
        onFileChanged: function () { },
    },/* 
    watch: {
        midiFile: function () {
            if (this.midiplayer !== null) {
                console.log('aaa');
                this.midiplayer.stop();
            } else {
                this.midiplayer = new MidiPlayer.Player((ev) => {
                    for (var func of this.playMidiFuncs) {
                        if (this.isFunc(func)) {
                            func(ev);
                        }
                    }
                });
                this.midiplayer.loadArrayBuffer(this.midiFile);
                console.log(this.midiplayer);
                this.midiplayer.play();
            }
        }
    } */
}