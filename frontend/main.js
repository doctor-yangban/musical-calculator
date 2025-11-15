import { createApp } from 'vue';
import App from './App.vue';
function main() {
    var app = createApp(App);
    app.mount("#app");
    return app;
}
var app = main();