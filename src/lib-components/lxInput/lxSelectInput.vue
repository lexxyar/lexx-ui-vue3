<template>
  <div data-root="lx-dd-list">
    <template v-if="emptyLabel || label">
      <label :for="uid" class="block text-sm font-medium text-gray-700"
             :class="labelClass">{{ label }}</label>
    </template>
    <div class="mt-1 relative">
      <button type="button"
              class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-label"
              @click="open = !open"
              data-root="lx-dd-list"
      >
        <!--suppress HtmlUnknownTag -->
        <div class="flex items-center" data-root="lx-dd-list">
          <template v-if="typeof($slots['item']) !== 'undefined'">
            <slot name="item" :item="selectedOption"></slot>
          </template>
          <template v-else>
            <span
              class="ml-3 block truncate font-semibold font-normal">
              {{ getValue(selectedOption) }}
            </span>

          </template>
        </div>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <!-- Heroicon name: solid/selector -->
        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
        >
          <path fill-rule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"/>
        </svg>
      </span>
      </button>

      <ul v-show="open"
          class="z-40 absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          @keydown.enter.stop.prevent="onOptionSelect()"
          @keydown.space.stop.prevent="onOptionSelect()"
          @keydown.escape="onEscape()"
          @keydown.arrow-up.prevent="onArrowUp()"
          @keydown.arrow-down.prevent="onArrowDown()"
          tabindex="-1"
          role="listbox"
      >

        <template v-for="opt in options">
          <li
            class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white"
            role="option"
            @click="onChoose(opt[optionValueField])"
          >
            <div class="flex items-center" data-root="lx-dd-list">
              <template v-if="typeof($slots['item']) !== 'undefined'">
                <slot name="item" :item="opt"></slot>
              </template>
              <template v-else>
                {{ getValue(opt) }}
              </template>
            </div>
            <template v-if="+opt[optionValueField] === +modelValue">
              <lx-select-input-checkmark class=""/>
            </template>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import lxSelectInputCheckmark from "@/lib-components/lxInput/components/lxSelectInputCheckmark.vue";
// import {default as VueClickAway} from "vue3-click-away"
// import VueClickAwayPlugin, {default} from "vue3-click-away"
// import mixin from "vue3-click-away";
// import { mixin as VueClickAway } from "vue3-click-away";

// const lxSelectInputCheckmark = require("@/lib-components/lxInput/components/lxSelectInputCheckmark")

export default defineComponent({
  name: "lxSelectInput",
  emits: ['update:modelValue'],
  // mixins: [mixin],
  components: {lxSelectInputCheckmark},
  props: {
    modelValue: {type: String},
    options: {type: Array, default: []},
    multiple: {type: Boolean, default: false},
    optionTitleField: {type: String, default: 'title'},
    optionValueField: {type: String, default: 'id'},
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
      open: false,
      uid: this.genUid(),
    })
  },
  created() {
    window.addEventListener('click', (e) => {
      // e.preventDefault()
      e.stopPropagation()
      if (!this.$el.contains(e.target)) {
        const el = e.target as HTMLElement
        let dataset = el.dataset
        if (['SPAN', 'IMG', 'SVG'].includes(el.tagName)) {
          const parent = el.parentElement as HTMLElement
          dataset = parent.dataset
        }
        if (dataset && !(dataset.root && dataset.root === 'lx-dd-list')) {
          this.open = false
        }
      }
    })
  },
  computed: {
    selectedOption(): any {
      // @ts-ignore
      return this.options.find((i: number) => +i[this.optionValueField] === +this.modelValue)
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
  }, // computed
  methods: {
    onOptionSelect() {
    },
    onEscape() {
    },
    onArrowUp() {
    },
    onArrowDown() {
    },
    onChoose(e: any) {
      this.$emit('update:modelValue', `${e}`)
      this.open = false
    },
    getValue(opt: any) {
      if (!opt) {
        return ''
      }
      return opt[this.optionTitleField]
    },
    getCss(): string {
      const css = []
      css.push(this.readonly ? 'readonly' : '')
      css.push(this.size ? `input-group-${this.size}` : '')
      return css.join(' ')
    },
    genUid(): string {
      return '_' + Math.random().toString(36).substr(2, 9);
    },
  } // methods

})
</script>

<style scoped>

</style>
