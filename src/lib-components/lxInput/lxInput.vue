<template>
  <div class="flex flex-col">
    <template v-if="emptyLabel || label">
      <label :for="uid" class="text-md">{{ label }}</label>
    </template>

    <div class="input-container flex">

      <div
        class="shadow-sm border rounded rounded-r-none border-r-0 flex-none py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline input-extention prepend"
        v-if="hasPrepend">
        <slot name="prepend"></slot>
      </div>
      <!--suppress HtmlFormInputWithoutLabel -->
      <input :type="type" :id="uid" :placeholder="placeholder" :readonly="readonly"
             @input="onInput($event.target.value)" :value="modelValue"
             class="shadow-sm border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
             :class="{'rounded-l-none':hasPrepend, 'rounded-r-none':hasAppend}"
      />
      <div
        class="shadow-sm border rounded rounded-l-none border-l-0 flex-none py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline input-extention append"
        v-if="hasAppend">
        <slot name="append"></slot>
      </div>
    </div>

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
import inputMixin from "../mixins/inputMixin";

export default defineComponent({
  name: "lxInput",
  emits: ['update:modelValue', 'input'],
  mixins: [inputMixin],
  props: {
    modelValue: String,
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return ['text', 'number', 'email', 'phone', 'password'].indexOf(value) !== -1
      },
    },
    commitTimout: {
      type: Number,
      default: 0
    },
  },
  data() {
    return ({
      timer: null,
    })
  },
  computed: {
    colcount() {
      if (this.hasAppend && this.hasPrepend) {
        return 3
      }
      if (this.hasAppend || this.hasPrepend) {
        return 2
      }
      return 1
    },

  },
  methods: {
    onInput(e) {
      if (+this.commitTimout > 0) {
        if (!!this.timer)
          clearTimeout(this.timer)
        this.timer = setTimeout(function () {
          this.$emit('input', e)
        }.bind(this), this.commitTimout)
      } else {
        this.$emit('input', e)
      }
      this.$emit('update:modelValue', e)

    }
  },
})
</script>

<style scoped>

</style>
