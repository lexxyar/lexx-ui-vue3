<template>
  <div class="input-group" :class="getCss()">
    <template v-if="emptyLabel || label">
      <label :for="uid" :class="labelClass">{{ label }}</label>
    </template>
    <div class="input-container">
      <textarea
          class="shadow-sm border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          @input="$emit('input', $event.target.value)"
          :readonly="readonly"
      >{{ value }}</textarea>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import inputMixin from "@/lib-components/mixins/inputMixin";

export default defineComponent({
  name: "lxTextareaInput",
  props: {},
  emits: ['input'],
  data() {
    return ({})
  },
  computed: {},
  mixins: [inputMixin]
})
</script>

<style scoped>

</style>