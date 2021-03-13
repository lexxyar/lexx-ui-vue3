<template>
  <button
      class="p-2 bg-gray-100 rounded-full focus:outline-none focus:ring hover:bg-gray-200"
  >
    <slot></slot>
  </button>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxNavbarButton"
})
</script>

<style scoped>

</style>