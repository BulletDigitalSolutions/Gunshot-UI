<template>
    <div>
        <input v-for="(v, index) in values"
            :type="type === 'number' ? 'tel' : type"
            :pattern="type === 'number' ? '[0-9]' : null"
            :autoFocus="autoFocus && index === autoFocusIndex"
            :key="`${id}-${index}`"
            :data-id="index"
            :value="v"
            :ref="iRefs[index]"
            v-on:input="onValueChange"
            v-on:focus="onFocus"
            v-on:keydown="onKeyDown"
            :disabled="disabled"
            :required="required"
            maxlength="1"
            :class="fieldClass"
        />
    </div>
</template>

<script>
// Based off https://github.com/suweya/vue-verification-code-input/blob/master/src/components/CodeInput.vue - MIT License

const KEY_CODE = {
    backspace: 8,
    left: 37,
    up: 38,
    right: 39,
    down: 40
};

export default {
    props: {
        type: {
            type: String,
            default: "text"
        },
        fields: {
            type: Number,
            default: 5
        },
        autoFocus: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        fieldClass: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        },
    },

    data() {
        const { fields, values } = this;
        let vals;
        let autoFocusIndex = 0;
        if (values && values.length) {
            vals = [];
            for (let i = 0; i < fields; i++) {
                vals.push(values[i] || "");
            }
            autoFocusIndex = values.length >= fields ? 0 : values.length;
        } else {
            vals = Array(fields).fill("");
        }
        this.iRefs = [];
        for (let i = 0; i < fields; i++) {
            this.iRefs.push(`input_${i}`);
        }
        this.id = +new Date();
        return { values: vals, autoFocusIndex };
    },

    methods: {
        onFocus(e) {
            e.target.select(e);
        },

        onValueChange(e) {
            const index = parseInt(e.target.dataset.id);
            const { type, fields } = this;
            if (type === "number") {
                e.target.value = e.target.value.replace(/[^\d]/gi, "");
            }
            // this.handleKeys[index] = false;
            if (
                e.target.value === "" ||
                (type === "number" && !e.target.validity.valid)
            ) {
                return;
            }
            let next;
            const value = e.target.value;
            let { values } = this;
            values = Object.assign([], values);
            if (value.length > 1) {
                let nextIndex = value.length + index - 1;
                if (nextIndex >= fields) {
                    nextIndex = fields - 1;
                }
                next = this.iRefs[nextIndex];
                const split = value.split("");
                split.forEach((item, i) => {
                    const cursor = index + i;
                    if (cursor < fields) {
                        values[cursor] = item;
                    }
                });
                this.values = values;
            } else {
                next = this.iRefs[index + 1];
                values[index] = value;
                this.values = values;
            }
            if (next) {
                const element = this.$refs[next][0];
                element.focus();
                element.select();
            }
            this.triggerChange(values);
        },

        onKeyDown(e) {
            const index = parseInt(e.target.dataset.id);
            const prevIndex = index - 1;
            const nextIndex = index + 1;
            const prev = this.iRefs[prevIndex];
            const next = this.iRefs[nextIndex];
            switch (e.keyCode) {
                case KEY_CODE.backspace: {
                    e.preventDefault();
                    const vals = [...this.values];
                    if (this.values[index]) {
                        vals[index] = "";
                        this.values = vals;
                        this.triggerChange(vals);
                    } else if (prev) {
                        vals[prevIndex] = "";
                        this.$refs[prev][0].focus();
                        this.values = vals;
                        this.triggerChange(vals);
                    }
                    break;
                }
                case KEY_CODE.left:
                    e.preventDefault();
                    if (prev) {
                        this.$refs[prev][0].focus();
                    }
                    break;
                case KEY_CODE.right:
                    e.preventDefault();
                    if (next) {
                        this.$refs[next][0].focus();
                    }
                    break;
                case KEY_CODE.up:
                case KEY_CODE.down:
                    e.preventDefault();
                    break;
                default:
                    // this.handleKeys[index] = true;
                    break;
            }
        },

        triggerChange(values = this.values) {
            const { fields } = this;
            const val = values.join("");
            this.$emit("input", val);
            if (val.length >= fields) {
                this.$emit("complete", val);
            }
        }
    },

    watch: {
        value(val) {
            const { values } = this;
            const split = val.split("");
            split.forEach((item, i) => {
                if (i < values.length) {
                    values[i] = item;
                }
            });
            this.values = values;
        }
    }
};
</script>