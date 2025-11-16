<script setup>
import calculator from './components/calculator.vue';
import midiPlayer from './components/midiPlayer.vue';
import mixins from './mixins';
</script>
<template>
    <div class="calculators" ref="calculators" tabindex="0">
        <calculator :local-midi-file="midiFile" :calculator-outer-div="$refs.calculators" />
        <calculator :button-map="rightCalculatorBtnMap" :local-midi-file="midiFile" :key-map="rightCalculatorKeyMap"
            :calculator-outer-div="$refs.calculators" />
    </div>
    <midiPlayer />
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
    mixins: [mixins],
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
            }
        }
    },
}
</script>