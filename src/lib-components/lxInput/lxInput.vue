<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxInput",
  emits: ['update:modelValue', 'input', 'onclear'],

  props: {
    modelValue: String,
    readonly: {type: Boolean, default: false},
    clearButton: {type: Boolean, default: true},
    commitTimout: {
      type: Number,
      default: 0
    },
    label: {type: String, default: ''},
    size: {
      type: String,
      default: '',
      validator: (value: string) => {
        return ['', 'sm', 'lg', 'xl'].indexOf(value) !== -1
      },
    },
    labelSize: {
      type: String,
      validator: (value: string) => {
        return ['', 'sm', 'lg', 'xl'].indexOf(value) !== -1
      },
      default: ''
    },
    emptyLabel: {type: Boolean, default: false},
    placeholder: {type: String, default: ''},

    type: {
      type: String,
      default: 'text',
      validator: (value: string) => {
        return ['text', 'number', 'email', 'phone', 'password'].indexOf(value) !== -1
      },
    },
  },

  data() {
    return ({
      timer: 0,
      uid: this.genUid(),
    })
  },
  computed: {
    colcount() {
      if (this.hasAppend && this.hasPrepend) {
        return 3
      }
      if (this.hasAppend || this.hasPrepend) {
        return 2
      }
      return 1
    },
    hasAppend(): boolean {
      // @ts-ignore
      return this.$slots['append']
    },
    hasPrepend(): boolean {
      // @ts-ignore
      return this.$slots['prepend']
    },
    labelClass() {
      let val: string[] = [];
      val.push(this.labelSize)

      if (this.label) {
        val.push('has-text')
      }
      return val.join(' ')
    },
  },
  methods: {
    onInput(e: any) {
      const that = this
      if (+this.commitTimout > 0) {
        if (!!this.timer)
          clearTimeout(this.timer)
        this.timer = +global.setTimeout(function () {
          that.$emit('input', e)
        }.bind(this), this.commitTimout)
      } else {
        this.$emit('input', e)
      }
      this.$emit('update:modelValue', e)
    },
    getCss(): string {
      const css: string[] = []
      css.push(this.readonly ? 'readonly' : '')
      // css.push(this.size ? `input-group-${this.size}` : '')
      if (this.size) {
        css.push(`input-group-${this.size}`)
      }
      return css.join(' ')
    },
    genUid(): string {
      return '_' + Math.random().toString(36).substr(2, 9);
    },
    onClearClick() {
      this.$emit('onclear')
    }
  },
})
</script>

<template>
  <div class="flex flex-col">
    <template v-if="emptyLabel || label">
      <label :for="uid" class="text-md">{{ label }}</label>
    </template>

    <div class="input-container flex relative">

      <div
        class="shadow-sm border rounded rounded-r-none border-r-0 flex-none py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline input-extention prepend"
        v-if="hasPrepend">
        <slot name="prepend"></slot>
      </div>

      <div class="relative w-full lx-input-clear">
        <input :type="type" :id="uid" :placeholder="placeholder" :readonly="readonly"
               @input="onInput($event.target.value)" :value="modelValue"
               class="shadow-sm border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline lx-input"
               :class="{'rounded-l-none':hasPrepend, 'rounded-r-none':hasAppend}"
        />

        <div v-if="clearButton" class="lx-input-clear-button mb-2 mt-1"><span @click="onClearClick">&times;</span></div>
      </div>
      <div
        class="shadow-sm border rounded rounded-l-none border-l-0 flex-none py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline input-extention append"
        v-if="hasAppend">
        <slot name="append"></slot>
      </div>
    </div>

  </div>
</template>

<style scoped lang="css">


</style>
