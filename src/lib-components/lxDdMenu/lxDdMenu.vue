<template>
  <div class="absolute top-full py-2 w-48 bg-white rounded-md shadow-xl z-20 lx-dropdown-menu"
       :class="right?'right-0':'left-0'"
  role="dropdown-menu"
  >
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxDdMenu",
  props: {
    right: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return ({

    })
  },

})
</script>

<style scoped>

</style>