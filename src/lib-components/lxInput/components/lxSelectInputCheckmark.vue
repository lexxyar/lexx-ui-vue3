<template>
  <!--  :class="{ 'text-white': activeIndex === 2, 'text-indigo-600': !(activeIndex === 2) }"-->
  <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600" data-root="lx-dd-list">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd"></path>
</svg>
              </span>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxSelectInputCheckmark"
})
</script>

<style scoped>

</style>
