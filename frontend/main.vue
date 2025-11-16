<script setup>
import calculator from './components/calculator.vue';
</script>
<template>
    <div class="calculators">
        <calculator />
        <calculator :button-map="rightCalculatorBtnMap" />
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
    }
}
</script>