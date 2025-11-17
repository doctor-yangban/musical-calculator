import player from './player';
export default {
    mixins: [player],
    data: function () {
        return {
            buttons: {},
            btnMap: {},
            keyMap: {},
        }
    }
}