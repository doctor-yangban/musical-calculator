import Soundfont from 'soundfont-player';
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
    },
}