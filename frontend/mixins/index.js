import global from './global';
import player from './player';
export default {
    mixins: [global, player],
    data: function () {
        return {
            buttonsSet: false,
        }
    },
    methods: {
        initFuncCb: function () { }
    },
    watch: {
        buttonsSet: function () {
            this.initPlayer(this.initFuncCb);
        }
    }
}