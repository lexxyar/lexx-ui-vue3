<template>
  <template v-if="!!$router && route">
    <router-link class="block px-4 py-2 text-sm text-left capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
      <slot></slot>
    </router-link>
  </template>
  <template v-else>
    <a :href="link" class="block px-4 py-2 text-sm text-left capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
      <slot></slot>
    </a>
  </template>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxDdMenuItem",
  props: {
    route: {
      type: String
    },
    link: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>

</style>