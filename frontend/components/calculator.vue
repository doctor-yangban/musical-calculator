<script setup>
import mixins from '../mixins';
</script>
<template>
    <div class="musical-calculator" ref="calculator">
        <div>
            <div style="display: flex;">
                <div contenteditable="true"
                    style="background: #1c873c;color:#000000;width: 100%;height: 1.5em;margin-left: 0.5rem;margin-right: 0.5rem;">
                    1972-11-21</div>
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
        }
    },
    computed: {
        buttons: function () {
            var rtobj = {};
            console.log(this.$refs);
            for (var key in this.buttonMap) {
                if (this.isStr(key)) {
                    rtobj[key] = this.$refs.calculator.querySelector(`[data-button-key="${key}"]`);
                }
            }
            return rtobj;
        },
    },
    methods: {
        addListeners: function () {
            var buttons = this.buttons;
            for (var key in buttons) {
                if (buttons[key] === null) {
                    continue;
                }
                ((key) => {
                    buttons[key].addEventListener("click", (ev) => {
                        buttons[key].classList.add("highlight");
                        setTimeout(() => {
                            buttons[key].classList.remove("highlight");
                        }, this.config?.duration || 800);
                        this.playNote(this.buttonMap[key]);
                    });
                })(key);
            }
        }
    },
    mounted: function () {
        this.initFuncCb = (inst) => {
            this.addListeners();
        }
        this.buttonsSet = true;
    }
}
</script>