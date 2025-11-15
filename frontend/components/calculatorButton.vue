<script setup></script>
<template>
    <span :style="style">
        {{ key }}
    </span>
</template>
<script>
export default {
    mixins: [],
    props: {
        style: {
            type: Object,
            default: {
                "background": "black",
                "color": "white",
            },
        },
        key: {
            type: String,
            required: true,
        },
    },
}
</script>