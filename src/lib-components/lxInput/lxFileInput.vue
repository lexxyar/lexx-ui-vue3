<template>
  <div class="rounded border border-dashed  relative"
       :class="{'border-gray-300':readonly, 'border-gray-500':!readonly}"
  >
    <input type="file" multiple
           class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
           :readonly="readonly"
           :disabled="readonly"
           @input="$emit('update:modelValue', $event.target.value)" :value="modelValue"
    >
    <div class="text-center p-10 absolute top-0 right-0 left-0 m-auto"
         :class="{'text-gray-400':readonly}">
      {{ modelValue ? modelValue : label }}
    </div>
  </div>
</template>

<script>

import inputMixin from "@/lib-components/mixins/inputMixin";
import {defineComponent} from "vue";

export default defineComponent({
  name: "lxFileInput",
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  data() {
    return ({})
  },
  computed: {},
  mixins: [inputMixin],
})
</script>

<style scoped>

</style>