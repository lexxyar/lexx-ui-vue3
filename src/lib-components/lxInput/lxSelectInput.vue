<template>
  <!--suppress HtmlUnknownAttribute -->
  <div v-click-away="onClickAway">
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
      >
        <!--suppress HtmlUnknownTag -->
        <div class="flex items-center">
          <template v-if="typeof($slots['item']) !== 'undefined'">
            <slot name="item" :item="selectedOption"></slot>
          </template>
          <template v-else>
            {{ getValue(selectedOption) }}
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
            <div class="flex items-center">
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
        <!--        <li x-state:on="Highlighted"-->
        <!--            x-state:off="Not Highlighted"-->
        <!--            class="cursor-default select-none relative py-2 pl-3 pr-9 text-gray-900"-->
        <!--            x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation."-->
        <!--            id="listbox-option-2" role="option"-->
        <!--            @click="choose(2)"-->
        <!--            @mouseenter="activeIndex = 2"-->
        <!--            @mouseleave="activeIndex = null"-->
        <!--            :class="{ 'text-white bg-indigo-600': activeIndex === 2, 'text-gray-900': !(activeIndex === 2) }">-->
        <!--          <div class="flex items-center">-->
        <!--            <img-->
        <!--                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80"-->
        <!--                alt="" class="flex-shrink-0 h-6 w-6 rounded-full">-->
        <!--            <span x-state:on="Selected" x-state:off="Not Selected" class="ml-3 block truncate font-semibold"-->
        <!--                  :class="{ 'font-semibold': selectedIndex === 2, 'font-normal': !(selectedIndex === 2) }">-->
        <!--                  Devon Webb-->
        <!--                </span>-->
        <!--          </div>-->

        <!--          <lx-select-input-checkmark/>-->
        <!--        </li>-->

      </ul>
    </div>
  </div>

  <!--  <div>-->
  <!--    &lt;!&ndash;  <div class="input-group" :class="getCss()">&ndash;&gt;-->
  <!--    <template v-if="emptyLabel || label">-->
  <!--      <label :for="uid" :class="labelClass">{{ label }}</label>-->
  <!--    </template>-->
  <!--    <select :id="uid"-->
  <!--            :class="hasAppend?'appended':''"-->
  <!--            class="shadow-sm border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"-->
  <!--            :multiple="multiple"-->
  <!--            :disabled="readonly"-->
  <!--            :placeholder="placeholder"-->
  <!--            :value="modelValue"-->
  <!--            @change="$emit('update:modelValue', $event.target.value)"-->
  <!--    >-->
  <!--      &lt;!&ndash;        @change="$emit('update:modelValue', $event.target.value)"&ndash;&gt;-->
  <!--      <template v-for="opt in options">-->
  <!--        <option :value="opt.value" :selected="opt === modelValue">{{ opt.title }}</option>-->
  <!--      </template>-->
  <!--    </select>-->
  <!--    &lt;!&ndash;      <div class="input-extention append" v-if="hasAppend">&ndash;&gt;-->
  <!--    &lt;!&ndash;        <slot name="append"></slot>&ndash;&gt;-->
  <!--    &lt;!&ndash;      </div>&ndash;&gt;-->
  <!--    &lt;!&ndash;    </div>&ndash;&gt;-->
  <!--    &lt;!&ndash;  </div>&ndash;&gt;-->
  <!--  </div>-->
</template>

<script>

import inputMixin from "@/lib-components/mixins/inputMixin";
import {defineComponent} from "vue";
import {mixin as VueClickAway} from "vue3-click-away"
import lxSelectInputCheckmark from "@/lib-components/lxInput/components/lxSelectInputCheckmark"

export default defineComponent({
  name: "lxSelectInput",
  emits: ['update:modelValue'],
  mixins: [inputMixin, VueClickAway],
  components: {lxSelectInputCheckmark},
  props: {
    modelValue: {type: String},
    options: {type: Array, default: []},
    multiple: {type: Boolean, default: false},
    optionTitleField: {type: String, default: 'title'},
    optionValueField: {type: String, default: 'id'},
  },
  data() {
    return ({
      open: false,
    })
  },
  created() {

  },
  computed: {
    selectedOption() {
      return this.options.find((i) => +i[this.optionValueField] === +this.modelValue)
    },
  },
  methods: {
    onClickAway() {
      this.open = false
    },
    onOptionSelect() {
    },
    onEscape() {
    },
    onArrowUp() {
    },
    onArrowDown() {
    },
    onChoose(e) {
      // console.log(e)
      this.$emit('update:modelValue', `${e}`)
      this.open = false
    },
    getValue(opt) {
      if (!opt) {
        return ''
      }
      return opt[this.optionTitleField]
    },
  }
})
</script>

<style scoped>

</style>
