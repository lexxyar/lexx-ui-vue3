<template>
  <div class="rounded border border-dashed  relative"
       :class="{'border-gray-300':readonly, 'border-gray-500':!readonly}"
  >
    <input type="file" multiple
           class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
           :readonly="readonly"
           :disabled="readonly"
           @input="$emit('input', $event.target.value)"
    >
    <div class="text-center p-10 absolute top-0 right-0 left-0 m-auto"
         :class="{'text-gray-400':readonly}">
      <h4>
        Drop files anywhere to upload
        <br/>or
      </h4>
      <p class="">Select Files</p>
    </div>
  </div>
  <!--  <div class="input-group" :class="getCss()">-->
  <!--    <template v-if="emptyLabel || label">-->
  <!--      <label :for="uid" :class="labelClass">{{ label }}</label>-->
  <!--    </template>-->
  <!--    <div class="input-container">-->
  <!--      <input type="file" :value="value" :id="uid"-->
  <!--             class="form-control"-->
  <!--             @input="$emit('input', $event.target.value)"-->
  <!--             :readonly="readonly"-->
  <!--             :placeholder="placeholder"-->
  <!--      />-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>

import inputMixin from "@/lib-components/mixins/inputMixin";
import {defineComponent} from "vue";

export default defineComponent({
  name: "lxFileInput",
  props: {},
  data() {
    return ({})
  },
  computed: {},
  mixins: [inputMixin],
})
</script>

<style scoped>

</style>