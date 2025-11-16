<script setup>
import mixins from '../mixins';
import divinput from './divinput.vue';
</script>
<template>
    <div class="musical-calculator" ref="calculator" :tabindex="tabidx">
        <div>
            <div style="display: flex;">
                <div class="display">

                    <divinput
                        :style="{ 'font-size': '.6rem', 'max-width': '50vw', 'min-width': 'calc(var(--min-width) / 2)', 'position': 'relative' }"
                        :model="currExprStr" />
                    <div style="font-size:.6rem;font-weight: bold;font-style:italic;max-width:50vw;">
                        {{ currAns }}</div>

                </div>
            </div>
            <div style="display: flex;">
                <div class="calc-button" style="height: 2em;"><span
                        style="background: lightgrey;color:#222222;height: 2.4em;display: block;width: 2rem;">O</span>
                </div>
                <div class="calc-button"><span style="background: black;color:white;">音量</span></div>
                <div class="calc-button"><span style="background: black;color:white;">時間</span></div>
                <div class="calc-button"><span style="background: black;color:white;">鬧鈴</span></div>
                <div class="calc-button"><span style="background: darkred;color:white;">AC</span></div>
            </div>
            <div style="display:flex;position: relative;left: 2.2rem;">
                <div class="calc-button"><span style="background: blue;color:white;">M+</span></div>
                <div class="calc-button"><span style="background: blue;color:white;">M-</span></div>
                <div class="calc-button"><span style="background: blue;color:white;">MRC</span></div>
                <div class="calc-button"><span style="background: darkred;color:white;" data-button-key="CE">CE</span>
                </div>
            </div>
            <div style="display:flex;">
                <div class="calc-button"><span style="background: black;color:white;" data-button-name="B4"
                        data-button-idx="6" data-button-key="7">7</span>
                </div>
                <div class="calc-button"><span style="background: black;color:white;" data-button-name="C5"
                        data-button-idx="7" data-button-key="8">8</span>
                </div>
                <div class="calc-button"><span style="background: black;color:white;" data-button-name="D5"
                        data-button-idx="8" data-button-key="9">9</span>
                </div>
                <div class="calc-button"><span style="background: white;color:black;">GT</span></div>
                <div class="calc-button"><span style="background: white;color:black;">→</span></div>
            </div>
            <div style="display:flex;">
                <div class="calc-button"><span style="background: black;color:white;" data-button-name="F4"
                        data-button-idx="3" data-button-key="4">4</span>
                </div>
                <div class="calc-button"><span style="background: black;color:white;" data-button-name="G4"
                        data-button-idx="4" data-button-key="5">5</span>
                </div>
                <div class="calc-button"><span style="background: black;color:white;" data-button-name="A4"
                        data-button-idx="5" data-button-key="6">6</span>
                </div>
                <div class="calc-button"><span style="background: white;color:black;" data-button-name="G5"
                        data-button-idx="11" data-button-key="*">×</span>
                </div>
                <div class="calc-button"><span style="background: white;color:black;" data-button-name="A5"
                        data-button-idx="12" data-button-key="/">÷</span>
                </div>
            </div>
            <div style="display:flex;">
                <div class="calc-button"><span style="background: black;color:white;" data-button-name="C4"
                        data-button-idx="0" data-button-key="1">1</span>
                </div>
                <div class="calc-button"><span style="background: black;color:white;" data-button-name="D4"
                        data-button-idx="1" data-button-key="2">2</span>
                </div>
                <div class="calc-button"><span style="background: black;color:white;" data-button-name="E6"
                        data-button-idx="2" data-button-key="3">3</span>
                </div>
                <div class="calc-button"><span style="background: white;color:black;position: absolute;height: 3em;"
                        data-button-name="E5" data-button-idx="9" data-button-key="+">+</span></div>
                <div class="calc-button"><span style="background: white;color:black;" data-button-name="F5"
                        data-button-idx="10" data-button-key="-">-</span>
                </div>
            </div>
            <div style="display:flex;">
                <div class="calc-button"><span style="background: black;color:white;" data-button-key="0">0</span>
                </div>
                <div class="calc-button"><span style="background: black;color:white;" data-button-key="00">00</span>
                </div>
                <div class="calc-button"><span style="background: black;color:white;" data-button-key=".">.</span>
                </div>
                <div class="calc-button">__</div>
                <div class="calc-button"><span style="background: white;color:black;" data-button-name="B5"
                        data-button-idx="13" data-button-key="=">=</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.musical-calculator {
    height: 14em;
    background: silver;
    width: fit-content;
    padding: 0.5rem;
    border-radius: 6%;
    box-shadow: 2px 2px 1px 1px #000000, -2px -2px 1px 1px #000000, 2px -2px 1px 1px #000000, -2px 2px 1px 1px #000000;
}

.musical-calculator tr td {
    margin: 0.5rem;
    border-radius: 8vmax;
}

.musical-calculator>div>div>div {
    height: 1em;
    margin: 0.1rem;
    margin-top: 0.5em;
    min-width: 2rem;
}

.musical-calculator>div>div>div>span {
    border: 1px solid #000000;
    border-radius: 8vmax;
    min-width: 2rem;
    display: block;
    margin-top: 0.5em;
    text-align: center;
}

.display {
    background: #1c873c;
    color: #000000;
    padding-top: .1rem;
    padding-bottom: .1rem;
    height: 1.6rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    font-style: italic;
    line-height: .7rem;
    overflow: scroll;
    max-width: 100vw;
    --min-width: 22.5rem;
    min-width: var(--min-width);
}

.display::-webkit-scrollbar {
    display: none;
}
</style>
<script>
export default {
    mixins: [mixins],
    props: {
        buttonMap: {
            type: [Object],
            default: {
                '1': 'C4',
                '2': 'D4',
                '3': 'E4',
                '4': 'F4',
                '5': 'G4',
                '6': 'A4',
                '7': 'B4',
                '8': 'C5',
                '9': 'D5',
                '+': 'E5',
                '-': 'F5',
                '*': 'G5',
                '/': 'A5',
                '=': 'B5',
            }
        },
        tabidx: {
            type: Number,
            default: -1,
        },
        keyMap: {
            type: Object,
            default: {
                48: '0',
                49: '1',
                50: '2',
                51: '3',
                52: '4',
                53: '5',
                54: '6',
                55: '7',
                56: '8',
                57: '9',
                187: '=',
                189: '-',
            }
        }
    },
    data: function () {
        return {
            currAns: 0,
            currSymbol: '',
            currExprStr: '',
            btnClickListeners: [
                (key, buttons) => {
                    return (ev) => {
                        buttons[key].classList.add("highlight");
                        setTimeout(() => {
                            buttons[key].classList.remove("highlight");
                        }, this.config?.duration || 800);
                        this.playNote(this.buttonMap[key]);
                    }
                },
                (key, buttons) => {
                    return (ev) => {
                        if (key === '=') {
                            this.currAns = this.calculate(this.currExprStr);
                        } else {
                            this.currExprStr += key;
                        }
                    }
                },
            ],
        }
    },
    computed: {
        buttons: function () {
            var rtobj = {};
            //console.log(this.$refs);
            for (var key in this.buttonMap) {
                if (this.isStr(key)) {
                    rtobj[key] = this.$refs.calculator.querySelector(`[data-button-key="${key}"]`);
                }
            }
            return rtobj;
        },
    },
    methods: {
        /* btnClickListenerFunc: function (ev, btnKey, buttons) {
            for (var listener of this.btnClickListeners) {
                if (this.isFunc(listener)) {
                    listener(btnKey, buttons).apply(this, ev);
                }
            }
        },
        btnClickListener: function (ev) {
            console.log(this.btnKey);
            this.btnClickListenerFunc(ev, this.btnKey, this.buttons);
        },
        addBtnClickListener: function (btnKey, buttons) {
            console.log({ btnKey: btnKey, buttons: buttons, ...this });
            buttons[btnKey].addEventListener("click", this.btnClickListener.bind({ btnKey: btnKey, buttons: buttons, ...this }));
        }, */
        addBtnClickListener: function (btnKey) {
            for (var listener of this.btnClickListeners) {
                if (this.isFunc(listener)) {
                    this.buttons[btnKey].addEventListener("click", listener(btnKey, this.buttons).bind(this));
                }
            }
        },
        addListeners: function () {
            var buttons = this.buttons;
            for (var key in buttons) {
                if (buttons[key] === null) {
                    continue;
                }
                this.addBtnClickListener(key);
                /* ((key) => {
                    buttons[key].addEventListener("click", this.btnClickListenerFunc);
                })(key); */
                //this.addBtnClickListener(key, buttons);
            }
            this.$refs.calculator.addEventListener("keydown", (ev) => {
                var button = buttons[this.keyMap[ev.keyCode]];
                console.log(this.keyMap[ev.keyCode]);
                console.log(buttons);
                console.log(ev.keyCode)
                if (button !== null) {
                    button.click();
                }
            })
        },
        calculate: function (exprStr) {
            var formattedExprStr = exprStr.replaceAll('×', '*').replaceAll('÷', '/');
            return Function(`return ${formattedExprStr};`)();
        },
    },
    mounted: function () {
        this.initFuncCb = (inst) => {
            this.addListeners();
        }
        this.buttonsSet = true;
    }
}
</script>