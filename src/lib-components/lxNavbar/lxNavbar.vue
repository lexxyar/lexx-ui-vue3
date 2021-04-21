<template>
  <header class="flex-shrink-0 border-b bg-white">
    <div class="flex items-center justify-between p-2">
      <!-- Navbar left -->
      <div class="flex items-center space-x-3">

        <!-- Toggle sidebar button -->
        <button @click="onToggleSidebar" class="p-2 rounded-md focus:outline-none focus:ring">
          <svg
              class="w-4 h-4 text-gray-600"
              :class="{'transform transition-transform -rotate-180': isSidebarOpen}"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
          </svg>
        </button>

        <span class="p-2 text-xl font-semibold tracking-wider uppercase" v-if="hasBrandSlot()">
          <slot name="brand"></slot>
        </span>

        <slot name="left"></slot>

      </div>

      <!-- Navbar right -->
      <div class="relative flex items-center space-x-3">
        <slot></slot>

      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxNavbar",
  props: {
    sidebarOpen: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return ({
      isSidebarOpen: this.sidebarOpen,
    })
  },
  methods: {
    hasBrandSlot() {
      return this.$slots.brand
    },
    onToggleSidebar() {
      // console.log('lxNavbar', 'toggleSidebar', !this.isSidebarOpen)
      this.$emit('toggleSidebar', !this.isSidebarOpen)
    }
  },
  emits: ['toggleSidebar'],
  watch: {
    isSidebarOpen(val) {
      // console.log('lxNavbar', 'watch:isSidebarOpen', val)
      this.$emit('toggleSidebar', val)
    },
    sidebarOpen(val){
      // console.log('lxNavbar', 'watch:sidebarOpen', val)
      this.isSidebarOpen = val
    }
  }
})
</script>

<style scoped>

</style>
