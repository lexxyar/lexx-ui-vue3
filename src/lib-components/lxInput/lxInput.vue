<template>
  <div class="flex flex-col">
    <template v-if="emptyLabel || label">
      <label :for="uid" class="text-md">{{ label }}</label>
    </template>
    <!--suppress HtmlFormInputWithoutLabel -->
    <input :type="type" :id="uid" :placeholder="placeholder" :readonly="readonly"
           @input="$emit('update:modelValue', $event.target.value)" :value="modelValue"
           class="shadow-sm border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
  </div>
  <!--  <div class="input-group" :class="getCss()">-->
  <!--    <template v-if="emptyLabel || label">-->
  <!--      <label :for="uid" :class="labelClass">{{ label }}</label>-->
  <!--    </template>-->
  <!--    <div class="input-container">-->
  <!--      <div class="input-extention prepend" v-if="hasPrepend">-->
  <!--        <slot name="prepend"></slot>-->
  <!--      </div>-->
  <!--      <input :type="type" :value="value" :id="uid" :class="hasAppend?'appended':''"-->
  <!--             class="form-control"-->
  <!--             @input="$emit('input', $event.target.value)"-->
  <!--             :readonly="readonly"-->
  <!--             :placeholder="placeholder"-->
  <!--      />-->
  <!--      <div class="input-extention append" v-if="hasAppend">-->
  <!--        <slot name="append"></slot>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
import {defineComponent} from "vue"
import inputMixin from "@/lib-components/mixins/inputMixin";

export default defineComponent({
  name: "lxInput",
  props: {
    modelValue: String,
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return ['text', 'number', 'email', 'phone', 'password'].indexOf(value) !== -1
      },
    },
  },
  data() {
    return ({})
  },
  emits: ['update:modelValue'],
  computed: {},
  methods: {},
  mixins: [inputMixin]
})
</script>

<style scoped>

</style>