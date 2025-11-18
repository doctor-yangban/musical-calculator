<script setup>
import calculator from './components/calculator.vue';
import calculators from './mixins/calculators';
import fileInput from './components/fileInput.vue';
import mixins from './mixins';
import MidiPlayer from 'midi-player-js';
</script>
<template>
    <div class="calculators" ref="calculatorsDiv" tabindex="0">
        <calculator :local-midi-file="midiFile" @set-btn="setBtnandMap($event.btn)" />
        <calculator :button-map="rightCalculatorBtnMap" :local-midi-file="midiFile" @set-btn="setBtnandMap($event.btn)"
            :key-map="rightCalculatorKeyMap" />
    </div>
    <!-- <midiPlayer /> -->
    <div class="settings">
        <fileInput @change-file="playMidi($event.fileData)" way="ArrayBuffer" />
        <button @click="midiplayer !== null ? midiplayer.play() : {};">play midi</button>
        <input type="text"
            @input="config.duration = ($event.target.value.length >= 3) ? parseInt($event.target.value) : config.duration">
        <input type="text" v-model="tempo">
    </div>

</template>
<style scoped>
.calculators {
    display: flex;
}

.calculators>div {
    margin: .5rem;
}
</style>
<script>
export default {
    mixins: [mixins, calculators],
    data: function () {
        return {
            rightCalculatorBtnMap: {
                '1': 'Cs4',
                '2': 'Ds4',
                '3': 'F4',
                '4': 'Fs4',
                '5': 'Gs4',
                '6': 'As4',
                '7': 'C5',
                '8': 'Cs5',
                '9': 'Ds5',
                '+': 'F5',
                '-': 'Fs5',
                '*': 'Gs5',
                '/': 'As5',
                '=': 'C6',
            },
            rightCalculatorKeyMap: {
                97: '1',
                98: '2',
                99: '3',
                100: '4',
                101: '5',
                102: '6',
                103: '7',
                104: '8',
                105: '9',
                107: '+',
                111: '/',
                109: '-',
                106: '*',
                13: '=',
            },
            midiToPlay: null,
            tempo: 120,
        }
    },
    methods: {
        setBtnandMap: function ({ btn, key, note }) {
            this.buttons[key] = btn;
            this.btnMap[key] = note;
            this.keyMap[note] = key;
        },
        playMidi: function (midi) {
            this.midiplayer = new MidiPlayer.Player();
            this.midiplayer.tempo = Number(this.tempo);
            console.log(this.midiplayer.tempo);
            this.midiplayer.on('midiEvent', (ev) => {
                console.log('aaa');
                if (ev.name === 'Note on') {
                    setTimeout(() => {
                        var button = this.buttons[this.keyMap[ev.noteName] || this.keyMap[this.flatToSharpMap[ev.noteName]]];
                        console.log(ev.noteName);
                        console.log(this.keyMap);
                        console.log(this.keyMap[ev.noteName]);
                        if (button && button !== null) {
                            button.click();
                        }
                    }, this.config.duration || 800);
                }
            });
            this.midiplayer.loadArrayBuffer(midi);
        }
    }
}
</script>