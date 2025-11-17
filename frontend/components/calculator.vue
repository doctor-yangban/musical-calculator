<script setup>
import mixins from '../mixins';
import divinput from './divinput.vue';
import midiPlayer from './midiPlayer.vue';
import MidiPlayer from 'midi-player-js';
</script>
<template>
    <div class="musical-calculator" ref="calculator" :tabindex="tabidx">
        <div>
            <div style="display: flex;">
                <div class="display">

                    <divinput
                        :style="{ 'font-size': 'calc(.6rem * var(--calculatorSize))', 'width': 'calc(var(--min-width) / 2)', 'position': 'relative' }"
                        :model="currExprStr" />
                    <div
                        style="font-size:calc(.6rem * var(--calculatorSize));font-weight: bold;font-style:italic;max-width:50vw;">
                        {{ currAns }}</div>

                </div>
            </div>
            <div style="display: flex;margin-top: calc(-.5rem * var(--calculatorSize));">
                <div class="calc-button" style="height: 2em;"><span
                        style="background: lightgrey;color:#222222;height: 2.4em;display: block;width: 2rem;">O</span>
                </div>
                <div class="calc-button"><span style="background: black;color:white;">音量</span></div>
                <div class="calc-button"><span style="background: black;color:white;">時間</span></div>
                <div class="calc-button"><span style="background: black;color:white;">鬧鈴</span></div>
                <div class="calc-button"><span style="background: darkred;color:white;"
                        @click="currExprStr = ''; currAns = 0">AC</span></div>
            </div>
            <div style="display:flex;position: relative;left: 2.2rem;">
                <div class="calc-button"><span style="background: blue;color:white;">M+</span></div>
                <div class="calc-button"><span style="background: blue;color:white;">M-</span></div>
                <div class="calc-button"><span style="background: blue;color:white;">MRC</span></div>
                <div class="calc-button"><span style="background: darkred;color:white;" data-button-key="CE"
                        @click="currExprStr = currExprStr.slice(0, currExprStr.length - 1)">CE</span>
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
* {
    --calculatorSize: 1;
}

@media (min-width:500px) {
    * {
        --calculatorSize: 1.35 !important;
    }
}

@media (min-width:900px) {
    * {
        --calculatorSize: 1 !important;
    }
}

.musical-calculator {
    height: calc(14em * var(--calculatorSize));
    background: silver;
    width: fit-content;
    padding: calc(0.5rem * var(--calculatorSize));
    border-radius: 6%;
    box-shadow: 2px 2px 1px 1px #000000, -2px -2px 1px 1px #000000, 2px -2px 1px 1px #000000, -2px 2px 1px 1px #000000;
}

.musical-calculator tr td {
    margin-top: calc(0.5rem * var(--calculatorSize));
    border-radius: 8vmax;
}

.musical-calculator>div>div>div {
    height: calc(1em * var(--calculatorSize));
    margin: calc(0.1rem * var(--calculatorSize));
    margin-top: calc(0.5em * var(--calculatorSize));
    min-width: calc(2rem * var(--calculatorSize));
}

.musical-calculator>div>div>div>span {
    border: 1px solid #000000;
    border-radius: calc(8vmax * var(--calculatorSize));
    min-width: calc(2rem * var(--calculatorSize));
    display: block;
    margin-top: calc(0.5em * var(--calculatorSize));
    text-align: center;
    font-size: calc(100% * var(--calculatorSize));
    background: transparent;
}

.display {
    background: #1c873c;
    color: #000000;
    padding-top: calc(.1rem * var(--calculatorSize));
    padding-bottom: calc(.1rem * var(--calculatorSize));
    height: calc(1.2rem * var(--calculatorSize));
    margin-left: calc(.5rem * var(--calculatorSize));
    margin-right: calc(.5rem * var(--calculatorSize));
    font-size: calc(1.2rem * var(--calculatorSize));
    font-weight: bold;
    font-style: italic;
    line-height: calc(.6rem * var(--calculatorSize));
    overflow: scroll !important;
    max-width: 100vw;
    --min-width: calc(22.5rem * var(--calculatorSize));
    min-width: var(--min-width);
}

.display>* {
    overflow: scroll !important;
    overflow-x: scroll !important;
}

.display::-webkit-scrollbar,
.display>*::-webkit-scrollbar {
    display: none;
}
</style>
<script>
export default {
    mixins: [mixins, midiPlayer],
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
                '0': null,
                '00': null,
                '.': null,
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
                219: '+',
                221: '/',
            }
        },
        calculatorOuterDiv: {
            type: [HTMLElement, null],
            required: false,
            default: null,
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
                        if (this.buttonMap[key] !== null) {
                            this.playNote(this.buttonMap[key]);
                        }
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
            playedNote: null,
            localMidiFile: null,
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
        noteToBtn: function () {
            var rtobj = {};
            for (var key in this.buttonMap) {
                rtobj[this.buttonMap[key]] = key;
            }
            return rtobj;
        },
        buttonToNote: function () {
            var rtobj = {};
            for (var key in this.buttonMap) {
                rtobj[key] = this.buttonMap[key];
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
                this.setBtn({ btn: buttons[key], key: this.buttonToNote[key], note: this.buttonMap[key] });
                /* ((key) => {
                    buttons[key].addEventListener("click", this.btnClickListenerFunc);
                })(key); */
                //this.addBtnClickListener(key, buttons);
            }
            this.$el.parentElement.addEventListener("keydown", (ev) => {
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
        loadMidiFile: function () {
            if (this.localMidiFile === null) {
                console.log(this.localMidiFile);
                return;
            }
            if (this.midiplayer !== null) {
                console.log('aaa');
                this.midiplayer.stop();
                this.midiplayer.loadArrayBuffer(this.localMidiFile);
                this.midiplayer.on('midiEvent', (ev) => {
                    if (ev.name === 'Note on') {
                        /* console.log(this.noteToAllBtn[ev.noteName]);
                        console.log(this.allBtns);
                        var button = this.allBtns[this.noteToAllBtn[ev.noteName]];
                        if (button !== null) {
                            button.click();
                        } */
                        setTimeout(() => { this.playedNote = ev.noteName; }, this.config?.duration || 800);
                    }
                });
                this.midiplayer.play();
            } else {
                this.midiplayer = new MidiPlayer.Player((ev) => {
                    if (ev.name === 'Note on') {
                        /* console.log(this.noteToAllBtn[ev.noteName]);
                        console.log(this.allBtns);
                        var button = this.allBtns[this.noteToAllBtn[ev.noteName]];
                        if (button !== null) {
                            button.click();
                        } */
                        setTimeout(() => { this.playedNote = ev.noteName; }, this.config?.duration || 800);
                    }
                });
                this.midiplayer.loadArrayBuffer(this.localMidiFile);
                console.log(this.midiplayer);
                this.midiplayer.play();
            }
        },
        readLocalMidiFile: function (file) {
            var reader = new FileReader();
            if (file) {
                reader.readAsArrayBuffer(file);
            }
            reader.addEventListener("load", (ev) => {
                this.localMidiFile = reader.result;
            });
        },
        setBtn: function (btn) {
            this.$emit("setBtn", { btn: btn, target: this });
        }
    },
    mounted: function () {
        this.initFuncCb = (inst) => {
            this.addListeners();
            console.log(this.midiplayer);
            this.midiplayer.on('midiEvent', (ev) => {
                if (ev.name === 'Note on') {
                    console.log(this.noteToBtn[ev.noteName]);
                    var button = this.buttons[this.noteToBtn[ev.noteName]];
                    if (button !== null) {
                        button.click();
                    }
                }
            });
        }
        this.buttonsSet = true;
        /*
        this.onFileChanged = () => {
            if (this.midiplayer !== null) {
                console.log('aaa');
                this.midiplayer.stop();
            } else {
                this.midiplayer = new MidiPlayer.Player((ev) => {
                    console.log(ev.name);
                    if (ev.name === 'Note on') {
                        console.log(this.noteToBtn[ev.noteName]);
                        var button = this.buttons[this.noteToBtn[ev.noteName]];
                        if (button !== null) {
                            button.click();
                        }
                    }
                });
                this.midiplayer.loadArrayBuffer(this.midiFile);
                console.log(this.midiplayer);
                this.midiplayer.play();
            }
        } */
    },
    watch: {
        playedNote: function () {
            var button = this.buttons[this.noteToBtn[this.playedNote]];
            if (button !== null) {
                button.click();
            }
        },
    },
    emits: ['setBtn'],
}
</script>