<!--suppress HtmlUnknownTag -->
<template>
  <label :for="uid" class="flex items-center cursor-pointer">
    <div class="pr-2">{{ label }}</div>
    <!-- toggle -->
    <div class="relative">
      <input :id="uid" type="checkbox" class="hidden"
             @change="$emit('update:modelValue', $event.target.checked)" :checked="!!modelValue"
      />
      <span class="absolute font-medium text-xs uppercase right-1 top-1.5">
      {{ textFalse }}
    </span>
      <span class="absolute font-medium text-xs uppercase right-8 top-1.5 text-white">
      {{ textTrue }}
    </span>

      <!-- path -->
      <div
        class="toggle-path bg-gray-200 w-14 h-7 rounded-full shadow-inner transition bg-gray-200 duration-300 ease-in-out"></div>

      <!-- crcle -->
      <div
        class="toggle-circle absolute w-7 h-7 bg-gray-200 rounded-full shadow inset-y-0 left-0 transition-all duration-300 ease-in-out"></div>

    </div>
  </label>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxToggle",
  emits: ['update:modelValue'],
  // mixins: [inputMixin],
  props: {
    modelValue: Boolean,
    textTrue: {type: String, default: 'ON'},
    textFalse: {type: String, default: 'OFF'},
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
    })
  },
  methods: {
    getCss(): string {
      const css = []
      css.push(this.readonly ? 'readonly' : '')
      css.push(this.size ? `input-group-${this.size}` : '')
      return css.join(' ')
    },
    genUid(): string {
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

input:checked ~ .toggle-circle {
  transform: translateX(100%);
}

input:checked ~ .toggle-path {
  @apply bg-blue-500;
}
</style>
