<template>
  <template v-if="$router && !!to">
    <router-link :to="to" class="btn" :class="getCss()" :disabled="disabled">
      <slot></slot>
    </router-link>
  </template>
  <template v-else>
    <button class="btn" :class="getCss()" :disabled="disabled">
      <slot/>
    </button>
  </template>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "lxButton",
  props: {
    styl: {
      type: String,
      validator: (value: string) => {
        return ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'dark', 'light'].indexOf(value) !== -1
      },
      default: 'primary',
    },
    typ: {
      type: String,
      validator: (value: string) => {
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
      validator: (value: string) => {
        return ['', 'md', 'lg', 'sm'].indexOf(value) !== -1
      },
      default: '',
    },
    to: {
      type: String,
      default: ''
    }
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
