export default {
    data: function () {
        return {
            noteMap: {
                0: "C3",
                1: "D3",
                2: "E3",
                3: "F3",
                4: "G3",
                5: "A4",
                6: "B4",
                7: "C4",
                8: "D4",
                9: "E4",
                10: "F4",
                11: "G4",
                12: "A5",
                13: "B5",
                14: "C5",
                15: "D5",
                16: "E5",
                17: "F5",
                18: "G5",
                19: "A6",
                20: "B6",
                21: "C6"
            },
            noteSemitoneUpMap: {
                0: "Cs3",
                1: "Ds3",
                2: "F3",
                3: "Fs3",
                4: "Gs3",
                5: "As4",
                6: "C4",
                7: "Cs4",
                8: "Ds4",
                9: "F4",
                10: "Fs4",
                11: "Gs4",
                12: "As5",
                13: "C5",
                14: "Cs5",
                15: "Ds5",
                16: "F5",
                17: "Fs5",
                18: "Gs5",
                19: "As6",
                20: "C3"
            },
            noteNames: ["C3", "D3", "E3", "F3", "G3", "A4", "B4", "C4", "D4", "E4", "F4", "G4", "A5", "B5", "C5", "D5", "E5", "F5", "G5", "A6", "B6", "C6", "Cs3", "Ds3", "F3", "Fs3", "Gs3", "As4", "C4", "Cs4", "Ds4", "F4", "Fs4", "Gs4", "As5", "C5", "Cs5", "Ds5", "F5", "Fs5", "Gs5", "As6", "C3"],
        }
    },
    computed: {},
    methods: {
        isNumb: function (param) {
            return typeof param === 'number';
        },
        isStr: function (param) {
            return typeof param === 'string' || param instanceof String;
        },
        isObj: function (param) {
            return typeof param === 'object';
        },
        isObjNotNull: function (param) {
            return typeof param === 'object' && param !== null;
        },
        isArray: function (param) {
            return param instanceof Array;
        },
        isFunc: function (param) {
            return typeof param === 'function';
        }
    },
}