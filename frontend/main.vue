<script setup>
import calculator from './components/calculator.vue';
import midiPlayer from './components/midiPlayer.vue';
import player from './mixins/player';
</script>
<template>
    <div class="calculators">
        <calculator :local-midi-file="midiFile" />
        <calculator :button-map="rightCalculatorBtnMap" :local-midi-file="midiFile" />
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
    mixins: [player],
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
            }
        }
    },
}
</script>