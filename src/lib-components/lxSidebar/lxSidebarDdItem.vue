<template>
  <a
    href="#"
    @click="expanded = !expanded"
    class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-indigo-100 dark:hover:bg-indigo-600"
    :class="{'text-gray-600 bg-gray-100':active}"
  >
    <span v-if="hasSvgSlot()"
          class="flex items-center justify-center text-lg text-gray-400">
      <slot name="svg"></slot>
    </span>
    <span class="text-sm"
          :class="hasSvgSlot()?'ml-2':'ml-7'">
      <slot></slot>
    </span>
    <span v-if="count !== 0"
          class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
    {{ count }}
    </span>
    <span class="ml-auto">
      <svg
        class="w-4 h-4 transition-transform transform"
        :class="{ 'rotate-180': expanded }"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </span>
  </a>
  <div class="mt-2 space-y-2 sidebar-submenu" v-if="expanded">
    <slot name="submenu"></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxSidebarDdItem",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 0
    },
  },
  data() {
    return ({
      expanded: false,
    })
  },
  methods: {
    hasSvgSlot() {
      return !!this.$slots.svg
    },
  }
})
</script>

<style scoped>

</style>
