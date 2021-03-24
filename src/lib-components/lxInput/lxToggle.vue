<!--suppress HtmlUnknownTag -->
<template>
  <!--  <label class="flex items-center relative cursor-pointer select-none">-->
  <!--    <span class="text-lg font-bold mr-3">{{ label }}</span>-->
  <!--    <input type="checkbox"-->
  <!--           class="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-gray-800 focus:ring-blue-500"-->
  <!--           @change="$emit('update:modelValue', $event.target.checked)" :checked="!!modelValue"-->
  <!--    />-->
  <!--    <span class="absolute font-medium text-xs uppercase right-1">-->
  <!--      {{ textFalse }}-->
  <!--    </span>-->
  <!--    <span class="absolute font-medium text-xs uppercase right-8">-->
  <!--      {{ textTrue }}-->
  <!--    </span>-->
  <!--    <span class="w-7 h-7 absolute rounded-full transition-all bg-gray-200"/>-->
  <!--  </label>-->

  <label :for="uid" class="flex items-center cursor-pointer">
    <div class="px-2">{{ label }}</div>
    <!-- toggle -->
    <div class="relative">
      <input :id="uid" type="checkbox" class="hidden"
             @change="$emit('update:modelValue', $event.target.checked)" :checked="!!modelValue"
      />
      <span class="absolute font-medium text-xs uppercase right-1 top-1.5">
      {{ textFalse }}
    </span>
      <span class="absolute font-medium text-xs uppercase right-8 top-1.5 text-white">
      {{ textTrue }}
    </span>

      <!-- path -->
      <div class="toggle-path bg-gray-200 w-14 h-7 rounded-full shadow-inner transition bg-gray-200 duration-300 ease-in-out"></div>

      <!-- crcle -->
      <div class="toggle-circle absolute w-7 h-7 bg-gray-200 rounded-full shadow inset-y-0 left-0 transition-all duration-300 ease-in-out"></div>

    </div>
  </label>
</template>

<script>
import {defineComponent} from "vue"
import inputMixin from "@/lib-components/mixins/inputMixin";

export default defineComponent({
  name: "lxToggle",
  emits: ['update:modelValue'],
  mixins: [inputMixin],
  props: {
    modelValue: Boolean,
    textTrue: {type: String, default: 'ON'},
    textFalse: {type: String, default: 'OFF'}
  },
})
</script>

<style scoped>

input:checked ~ .toggle-circle {
  transform: translateX(100%);
}

input:checked ~ .toggle-path {
  /*background-color: #81E6D9;*/
  @apply bg-blue-500;
}
</style>
