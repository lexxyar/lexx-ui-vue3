<template>
  <aside
      @keydown.escape="window.innerWidth <= 1024 ? isSidebarOpen = false : ''"
      tabindex="-1"
      class="fixed inset-y-0 z-10 flex-shrink-0 w-64 bg-white border-r lg:static dark:border-indigo-800 dark:bg-darker focus:outline-none lx-sidebar"
      :class="{'-translate-x-full lg:translate-x-0 lg:w-20 md:w-5 lg:translate-x-5 sm:hidden lx-sidebar-closed': !isSidebarOpen}">
    <!-- sidebar header -->
    <div class="flex items-center justify-between flex-shrink-0 p-2"
         :class="{'lg:justify-center': !isSidebarOpen}"
         v-if="hasBrandSlot()"
    >
          <span class="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
            <slot name="brand"></slot>
          </span>
      <button @click="onToggleSidebar" class="p-2 rounded-md lg:hidden">
        <svg
            class="w-6 h-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <div class="flex flex-col h-full">
      <!-- Sidebar links -->
      <nav aria-label="Main" class="flex-1 px-2 py-4 pb-20 space-y-2 overflow-y-auto">

        <slot></slot>

      </nav>

      <!-- Sidebar footer -->
      <slot name="footer"></slot>
    </div>
  </aside>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxSidebar",
  props: {
    header: {
      type: String
    },
    open: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return ({
      isSidebarOpen: this.open,
    })
  },
  methods: {
    hasBrandSlot(){
      return this.$slots.brand
    },
    onToggleSidebar(){
      // isSidebarOpen = !isSidebarOpen
      // console.log('toggle')
      this.$emit('toggle', !this.isSidebarOpen)
    }
  },
  emits: ['toggle'],
  watch: {
    isSidebarOpen(val) {
      this.$emit('toggle', val)
    },
    open(val){
      this.isSidebarOpen = val
    }
  },
})
</script>

<style scoped>

</style>
