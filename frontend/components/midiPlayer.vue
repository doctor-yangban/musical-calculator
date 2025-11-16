<script setup>
import mixins from '../mixins';
import MidiPlayer from 'midi-player-js';
</script>
<template>
    <input type="file" @change="readFile($event.target.files[0])" />
</template>
<script>
export default {
    mixins: [mixins],
    watch: {
        midiFile: function () {
            console.log(this.midiFile);
        }
    }
}
</script>