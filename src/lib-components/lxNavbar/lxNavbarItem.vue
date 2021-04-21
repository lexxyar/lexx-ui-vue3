<template>
  <template v-if="$router && !!to">
    <router-link :to="to"
                 class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-gray-200"
    >
      <slot></slot>
    </router-link>
  </template>
  <template v-else>
    <a :href="href"
       class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-gray-200">
      <slot></slot>
    </a>
  </template>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxNavbarItem",
  props: {
    href: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>

</style>
