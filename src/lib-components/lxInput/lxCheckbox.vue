<template>

  <label class="inline-flex items-center" :for="uid">
    <input type="checkbox" class="form-checkbox h-5 w-5 text-red-600" :id="uid"
           @change="onStateChange" :checked="modelValue">


    <span class="ml-2 text-gray-700">{{ label }}</span>
  </label>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxCheckbox",
  emits: ['update:modelValue'],
  props: {
    modelValue: {type: Boolean, default: false},
    value: {type: String},
    label: {type: String, default: ''},
    emptyLabel: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    placeholder: {type: String, default: ''},
    labelSize: {
      type: String,
      validator: (value: string) => {
        return ['', 'sm', 'lg', 'xl'].indexOf(value) !== -1
      },
      default: ''
    },
    size: {
      type: String,
      validator: (value: string) => {
        return ['', 'sm', 'lg'].indexOf(value) !== -1
      },
      default: ''
    },
  },
  data() {
    return ({
      uid: this.genUid(),
      checked: this.modelValue
    })
  },
  methods: {
    onStateChange(e: any) {
      this.$emit('update:modelValue', e.target.checked)
    },
    getCss() {
      const css = []
      css.push(this.readonly ? 'readonly' : '')
      css.push(this.size ? `input-group-${this.size}` : '')
      return css.join(' ')
    },
    genUid() {
      return '_' + Math.random().toString(36).substr(2, 9);
    }
  },
  computed: {
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

})
</script>

<style scoped>

</style>
