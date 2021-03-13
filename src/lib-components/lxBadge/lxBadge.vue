<template>
  <span class="badge" :class="getCss()">
    <slot></slot>
  </span>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
name: "lxBadge",
  props:{
    styl: {
      type: String,
      validator: (value) => {
        return ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'dark', 'light'].indexOf(value) !== -1
      },
      default: 'primary',
    },
  },
  methods: {
    getCss() {
      const css = []
      css.push(`badge-${this.styl}`)
      return css.join(' ')
    },
  }
})
</script>

<style scoped>

</style>