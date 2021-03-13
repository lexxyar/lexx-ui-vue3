<template>
  <a href="#"
     class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-gray-200">
    <slot></slot>
  </a>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxNavbarItem"
})
</script>

<style scoped>

</style>