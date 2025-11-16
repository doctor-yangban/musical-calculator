<script setup></script>
<template>
    <div :contenteditable="!disabled" @input="model = $event.target.innerText" :style="style">
        {{ model }}
    </div>
</template>
<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        model: String,
        style: {
            type: Object,
            default: {},
        }
    },
}
</script>