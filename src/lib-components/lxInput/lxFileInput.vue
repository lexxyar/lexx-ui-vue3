<template>
  <!--  <div class="rounded border border-dashed  relative"-->
  <!--       :class="{'border-gray-300':readonly, 'border-gray-500':!readonly}"-->
  <!--  >-->
  <!--    <input type="file" multiple-->
  <!--           class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"-->
  <!--           :readonly="readonly"-->
  <!--           :disabled="readonly"-->
  <!--           @input="$emit('update:modelValue', $event.target.value)" :value="modelValue"-->
  <!--    >-->
  <!--    <div class="text-center p-10 absolute top-0 right-0 left-0 m-auto"-->
  <!--         :class="{'text-gray-400':readonly}">-->
  <!--      {{ modelValue ? modelValue : label }}-->
  <!--    </div>-->
  <!--  </div>-->

  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
       :class="{'text-gray-400':readonly}"
  >
    <div class="space-y-1 text-center">
      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
           aria-hidden="true">
        <path
          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="flex text-sm text-gray-600">
        <label :for="uid"
               class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
          <span>Upload a file</span>
          <input id="uid" name="file-upload" type="file"
                 class="sr-only"
                 :readonly="readonly"
                 :disabled="readonly"
                 @input="$emit('update:modelValue', $event.target.value)" :value="modelValue"
          />
        </label>
        <p class="pl-1">or drag and drop</p>
      </div>
      <p class="text-xs text-gray-500">
        PNG, JPG, GIF up to 10MB
      </p>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "lxFileInput",
  props: {
    modelValue: String,
    label: {type: String, default: ''},
    emptyLabel: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    placeholder: {type: String, default: ''},
    labelSize: {
      type: String,
      validator:  (value:string)=> {
        return ['', 'sm', 'lg', 'xl'].indexOf(value) !== -1
      },
      default: ''
    },
    size: {
      type: String,
      validator:  (value:string)=> {
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
  methods:{
    getCss():string {
      const css = []
      css.push(this.readonly ? 'readonly' : '')
      css.push(this.size ? `input-group-${this.size}` : '')
      return css.join(' ')
    },
    genUid():string {
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
