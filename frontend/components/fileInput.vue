<script setup>
import global from '../mixins/global';
</script>
<template>
    <input type="file" @change="changeFile">
</template>
<script>
export default {
    mixins: [global],
    props: {
        way: String,
    },
    data: function () {
        return {
            files: [],
            data: undefined,
        }
    },
    methods: {
        changeFile: async function (ev) {
            this.files = ev.target.files;
            var data = await this.setData(this.files[this.files.length - 1], this.way);
            this.$emit("changeFile", { ...ev, fileData: data });
        },
        setData: async function (file, way) {
            return await new Promise((resolve) => {
                var reader = new FileReader();
                reader.addEventListener('load', (ev) => {
                    this.data = reader.result;
                    resolve(this.data);
                });
                switch (way) {
                    case 'ArrayBuffer': {
                        reader.readAsArrayBuffer(file);
                        break;
                    }
                    case 'text': {
                        reader.readAsText(file);
                        break;
                    }
                    case 'DataURL': {
                        reader.readAsDataURL(file);
                        break;
                    }
                }
            }).then((data) => data);
        }
    },
    emits: ['changeFile'],
}
</script>