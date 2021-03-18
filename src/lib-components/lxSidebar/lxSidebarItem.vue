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
        :href="link"
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

<script>
import {defineComponent} from "vue"
import navigationMixin from "@/lib-components/mixins/navigationMixin";

export default defineComponent({
  name: "lxSidebarItem",
  mixins: [navigationMixin],
  props: {
    link: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },
  methods: {
    firstLetter() {
      const text = this.$slots.default()[0].el?.textContent
      return text ? text.charAt(0) : '';
    }
  }
})
</script>

<style scoped>

</style>