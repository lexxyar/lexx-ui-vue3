<template>
  <template v-if="!!$router && to">
    <router-link class="block px-4 py-2 text-sm text-left capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                 :to="to">
      <slot></slot>
    </router-link>
  </template>
  <template v-else>
    <a :href="href"
       class="block px-4 py-2 text-sm text-left capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
      <slot></slot>
    </a>
  </template>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxDdMenuItem",
  props: {
    to: {
      type: String
    },
    href: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>

</style>
