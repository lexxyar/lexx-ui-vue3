<template>
<!--  <div class="input-group" :class="getCss()">-->
    <template v-if="emptyLabel || label">
      <label :for="uid" :class="labelClass">{{ label }}</label>
    </template>
<!--    <div class="input-container">-->
<!--      <div class="input-extention prepend" v-if="hasPrepend">-->
<!--        <slot name="prepend"></slot>-->
<!--      </div>-->
      <select :id="uid"
              :class="hasAppend?'appended':''"
              class="shadow-sm border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              :multiple="multiple"
              :disabled="readonly"
              :placeholder="placeholder"

      >
        <!--        v-model="value"-->
        <template v-for="opt in options">
          <option value="opt.value">{{ opt.title }}</option>
        </template>
      </select>
<!--      <div class="input-extention append" v-if="hasAppend">-->
<!--        <slot name="append"></slot>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>

import inputMixin from "@/lib-components/mixins/inputMixin";
import {defineComponent} from "vue";

export default defineComponent({
  name: "lxSelectInput",
  props: {
    options: {type: Array, default: []},
    multiple: {type: Boolean, default: false},
  },
  data() {
    return ({})
  },
  computed: {},
  mixins: [inputMixin]
})
</script>

<style scoped>

</style>