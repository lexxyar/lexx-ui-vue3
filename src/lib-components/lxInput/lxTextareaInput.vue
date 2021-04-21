<template>
  <div class="input-group" :class="getCss()">
    <template v-if="emptyLabel || label">
      <label :for="uid" :class="labelClass">{{ label }}</label>
    </template>
    <div class="input-container">
      <!--      class="shadow-sm border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"-->
      <!--suppress HtmlFormInputWithoutLabel -->
      <textarea
        class="shadow-sm focus:outline-none focus:shadow-outline py-2 px-3 mt-1 block w-full sm:text-sm border rounded-md text-gray-700"
        @input="$emit('update:modelValue', $event.target.value)"
        :readonly="readonly"
      >{{ modelValue }}</textarea>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "lxTextareaInput",
  props: {
    modelValue: String,
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
  emits: ['update:modelValue'],
  data() {
    return ({
      uid: this.genUid(),
    })
  },
  methods: {
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
