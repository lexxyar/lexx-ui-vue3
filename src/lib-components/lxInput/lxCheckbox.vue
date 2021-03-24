<template>
  <label class="inline-flex items-center">
    <input type="checkbox" class="form-checkbox h-5 w-5 text-red-600"
           @change="$emit('update:modelValue', $event.target.checked)" :checked="!!modelValue">
    <span class="ml-2 text-gray-700">{{ label }}</span>
  </label>
</template>

<script>
import inputMixin from "@/lib-components/mixins/inputMixin";
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxCheckbox",
  emits: ['update:modelValue'],
  mixins: [inputMixin],
  props: {
    modelValue: Boolean,
  },
})
</script>

<style scoped>

</style>
