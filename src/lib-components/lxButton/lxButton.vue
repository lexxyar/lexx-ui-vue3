<template>
  <button class="btn" :class="getCss()" :disabled="disabled" >
    <slot/>
  </button>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "lxButton",
  props: {
    styl: {
      type: String,
      validator: (value) => {
        return ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'dark', 'light'].indexOf(value) !== -1
      },
      default: 'primary',
    },
    typ: {
      type: String,
      validator: (value) => {
        return ['', 'flat', 'rounded', 'pill'].indexOf(value) !== -1
      },
      default: '',
    },
    outline: {
      type: Boolean,
      default: false,
    },
    iconed: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: (value) => {
        return ['', 'md','lg', 'sm'].indexOf(value) !== -1
      },
      default: '',
    },
  },
  methods: {
    getCss() {
      const css = []
      css.push(`btn-${this.styl}`)
      css.push(this.typ !== '' ? `btn-${this.typ}` : '')
      css.push(this.outline ? `btn-outline` : '')
      css.push(this.iconed ? `btn-icon` : '')
      css.push(this.disabled ? `btn-disabled` : '')
      css.push(this.size !== '' ? `btn-${this.size}` : '')

      return css.join(' ')
    },
  }
})
</script>

<style scoped>

</style>