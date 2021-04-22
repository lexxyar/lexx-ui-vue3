<template>
  <template v-if="$router && !!to">
    <router-link :to="to"
                 class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-indigo-100 dark:hover:bg-indigo-600 sidebar-item"
    >
      <span v-if="hasSvgSlot()"
            class="flex items-center justify-center text-lg text-gray-400">
        <slot name="svg"></slot>
      </span>

      <span v-if="!hasSvgSlot()" class="sidebar-item-caption">{{ firstLetter() }}</span>
      <span class="text-sm ml-2 sidebar-item-text"
            :class="{'ml-7':hasSvgSlot}">
        <slot></slot>
      </span>
      <span v-if="count !== 0"
            class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
{{ count }}
      </span>
    </router-link>
  </template>
  <template v-else>
    <a
      :href="href"
      class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-indigo-100 dark:hover:bg-indigo-600 sidebar-item"
      :class="{ 'text-gray-600 bg-gray-100 active':active }"
    >
      <span v-if="hasSvgSlot()"
            class="flex items-center justify-center text-lg text-gray-400">
        <slot name="svg"></slot>
      </span>

      <span v-if="!hasSvgSlot()" class="sidebar-item-caption">{{ firstLetter() }}</span>
      <span class="text-sm ml-2 sidebar-item-text"
            :class="{'ml-7':hasSvgSlot}">
        <slot></slot>
      </span>
      <span v-if="count !== 0"
            class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
{{ count }}
      </span>
    </a>
  </template>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxSidebarItem",
  props: {
    href: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 0
    },
  },
  methods: {
    firstLetter(): string {
      // @ts-ignore
      const a = this.$slots.default()
      if(a && a[0] && a[0].el) {
        const text = a[0].el.textContent
        return text ? text.charAt(0) : '';
      }
      return ''
    },
    hasSvgSlot() {
      return !!this.$slots.svg
    },
  }
})
</script>

<style scoped>

</style>
