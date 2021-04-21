<template>
  <div
    class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
    style="background: rgba(0,0,0,.7);" v-show="show" @click="$emit('close')">
    <div class="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3">
      <div class="flex justify-between border-b border-gray-100 px-5 py-4">
        <div class="flex">

          <!--        Info -->
          <template v-if="typ === 'info'">
            <svg class="w-6 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </template>

          <!--        Warning -->
          <template v-if="typ === 'warning'">
            <svg class="w-6 mr-2 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          </template>

          <!--        Error -->
          <template v-if="typ === 'error'">
            <svg class="w-6 mr-2 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>

          </template>

          <span class="font-bold text-gray-700 text-lg">{{ the_title }}</span>

        </div>
        <div>
          <button @click="$emit('close')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                 class="w-4 h-4 text-red-500 hover:text-red-600 transition duration-150">
              <path fill="currentColor"
                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                    class=""></path>
            </svg>
          </button>
        </div>
      </div>

      <div class="px-10 py-5 text-gray-600">
        <slot></slot>
      </div>

      <div class="px-5 py-4 flex justify-end">
        <template v-if="yesNo">
          <lx-button typ="flat" @click="$emit('okay')">
            Yes
          </lx-button>
        </template>

        <lx-button typ="flat" @click="$emit('close')">
          <template v-if="yesNo">
            No
          </template>
          <template v-else>
            Close
          </template>
        </lx-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "lxModal",
  emits: ['close', 'okay'],
  props: {
    typ: {
      type: String,
      default: 'info',
      validator: (value:string) => {
        return ['info', 'warning', 'error'].indexOf(value) !== -1
      },
    },
    title: {
      type: String,
      default: ''
    },
    yesNo: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    the_title():string {
      if (!this.title) {
        switch (this.typ) {
          case 'info':
            return 'Information'
          case 'warning':
            return 'Warning'
          case 'error':
            return 'Error'
          default:
            return ''
        }
      }
      return this.title
    }
  }
})
</script>

<style scoped>

</style>
