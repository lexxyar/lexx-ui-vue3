<template>
  <div class="max-w-2xl sm:px-6 lg:px-8">
    <div class="overflow-hidden shadow-md" :class="dark?'text-gray-100':''">

      <div class="px-6 py-4 border-b font-bold uppercase"
           :class="dark?'bg-gray-800 border-gray-600':'bg-white border-gray-200'"
           v-if="hasHeaderSlot()">
        <slot name="header"/>
      </div>

      <div class="p-6 bg-white border-b"
           :class="dark?'bg-gray-800 border-gray-600':'bg-white border-gray-200'">
        <slot></slot>
      </div>

      <div class="p-6 text-right"
           :class="dark?'bg-gray-800 border-gray-200':'bg-white border-gray-200'"
           v-if="hasFooterSlot()">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "lxCard",
  props: {
    dark: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    hasHeaderSlot() {
      return !!this.$slots.header
    },
    hasFooterSlot() {
      return !!this.$slots.footer
    },
  }
})
</script>

<style scoped>

</style>