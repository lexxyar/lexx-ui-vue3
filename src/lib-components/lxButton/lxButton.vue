<script lang="ts">
import {defineComponent} from 'vue';
import {Size, Styl, Typ} from "@/lib-components/definitions";

export default defineComponent({
  name: "lxButton",
  props: {
    styl: {
      type: String as () => Styl,
      validator: (value: Styl) => {
        return [Styl.primary, Styl.secondary, Styl.success, Styl.danger, Styl.info,
          Styl.warning, Styl.dark, Styl.light].indexOf(value) !== -1
      },
      default: Styl.primary,
    },
    typ: {
      type: String as () => Typ,
      validator: (value: Typ) => {
        return [Typ.none, Typ.flat, Typ.rounded, Typ.pill].indexOf(value) !== -1
      },
      default: Typ.none,
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
      type: String as () => Size,
      validator: (value: Size) => {
        return [Size.none, Size.md, Size.lg, Size.sm].indexOf(value) !== -1
      },
      default: Size.none,
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
