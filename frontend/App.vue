<script setup>
import mixins from './mixins';
import mainComponent from './main.vue';
</script>
<template>
    <mainComponent />
</template>
<style>
@import "./css/style.css";
</style>
<script>
export default {
    mixins: [mixins]
}
</script>