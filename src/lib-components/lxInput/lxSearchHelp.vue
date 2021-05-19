<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "lxSearchHelp",
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    readonly: {type: Boolean, default: false},
    label: {type: String, default: ''},
    emptyLabel: {type: Boolean, default: false},
    placeholder: {type: String, default: ''},
    helpTitle: String,
    tableHeader: Array,
    tableContent: Array,
    keyField: {type: String, default: 'id'},
    valueField: {type: String, default: 'name'},
  },
  setup() {

  },
  data() {
    return ({
      selectedKey: this.modelValue,
      value: '',
      showModal: false,
    })
  },
  created() {
    this.selectedKey = this.modelValue
    this.value = this.getSelected()
  },
  methods: {
    onCancelClick(e: any) {
      if (e.target.classList.contains('lx-modal-closable')) {
        e.stopPropagation()
        this.showModal = false
      }
    },
    onRowClick(e: any) {
      this.selectedKey = e[this.keyField]
      this.value = this.getSelected()
      this.showModal = false
      this.$emit('update:modelValue', this.selectedKey)
    },
    getSelected() {
      const find: any = this.tableContent?.find((itm: any) => itm[this.keyField] == this.selectedKey)
      if (find) {
        return find[this.valueField]
      } else {
        return ''
      }
    }
  },
  watch:{
    tableContent(){
      this.selectedKey = this.modelValue
      this.value = this.getSelected()
    }
  }
})
</script>

<template>
  <lx-input :readonly="true" :label="label"
            :empty-label="emptyLabel" :placeholder="placeholder" v-model="value">
    <template #append>
      <div class="text-gray-400 hover:text-gray-500 cursor-pointer" @click="showModal = !showModal">
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor"
                d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zm-80 464c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V144c0-8.82 7.18-16 16-16h48v240c0 26.51 21.49 48 48 48h240v48zm96-96c0 8.82-7.18 16-16 16H144c-8.82 0-16-7.18-16-16V48c0-8.82 7.18-16 16-16h320c8.82 0 16 7.18 16 16v320z"></path>
        </svg>
      </div>
    </template>
  </lx-input>

  <div
    class="lx-modal-closable main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
    style="background: rgba(0,0,0,.7);" v-show="showModal" @click="onCancelClick">
    <div class="md:w-2/3 sm:w-full rounded-lg shadow-lg bg-white my-3 max-h-screen">
      <div class="flex justify-between border-b border-gray-100 px-5 py-4">
        <div class="flex">

          <span class="font-bold text-gray-700 text-lg">{{ helpTitle }}</span>

        </div>
        <div>
          <button class="lx-modal-closable" @click="onCancelClick">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                 class="lx-modal-closable w-4 h-4 text-red-500 hover:text-red-600 transition duration-150">
              <path fill="currentColor"
                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                    class="lx-modal-closable"></path>
            </svg>
          </button>
        </div>
      </div>

      <div class="px-10 py-5 text-gray-600">
        <!--        content-->
        <lx-table :header="tableHeader" :data="tableContent" :checkboxes="false"
                  @row-click="onRowClick"></lx-table>
        <!--        /content-->
      </div>

      <div class="px-5 py-4 flex justify-end">
        <!--        <template v-if="yesNo">-->
        <!--          <lx-button typ="flat" @click="$emit('okay')">-->
        <!--            Yes-->
        <!--          </lx-button>-->
        <!--        </template>-->

        <lx-button class="lx-modal-closable" typ="flat" @click="onCancelClick">
          Cancel
        </lx-button>
      </div>
    </div>
  </div>
</template>
