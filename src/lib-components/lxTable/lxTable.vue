<script lang="ts">
import {defineComponent} from 'vue';

interface LxTableData {
  checkAll: boolean
}

export default defineComponent({
  name: "lxTable",
  props: {
    checkboxes: {
      type: Boolean,
      default: true
    },
    header: {
      type: Array,
      default: []
    },
    data: {
      type: Array,
      default: []
    }
  },
  data(): LxTableData {
    return ({
      checkAll: false,
    })
  },
  watch: {
    checkAll(val: any) {
      this.data.map((itm: any) => itm.checked = val)
    },
  },
  methods: {}
})
</script>

<template>
  <table class="border-collapse shadow-sm bg-white border-t-3 border-blue-400 lx-table-zebra w-full">
    <thead>
    <tr>
      <th v-if="checkboxes" class="px-3 py-3 text-sm text-left w-3">
        <input type="checkbox" v-model="checkAll"/>
      </th>
      <th v-for="h in header" class="px-3 py-3 text-sm text-left" :class="h.css">{{ h.title ? h.title : h.key }}</th>
    </tr>
    </thead>
    <tfoot></tfoot>
    <tbody>
    <template v-if="data.length > 0">
      <tr v-for="itm in data" class="hover:bg-gray-100" @click="$emit('row-click', itm)">
        <td v-if="checkboxes" class="px-3 py-3 text-sm">
          <input type="checkbox" :data-id="itm.id" v-model="itm.checked"/>
        </td>
        <template v-for="h in header">
          <td v-if="typeof($slots[h.key]) !== 'undefined'" class="px-3 py-3 text-sm">
            <slot :name="h.key" :field="h" :item="itm"></slot>
          </td>
          <td v-else class="px-3 py-3 text-sm">
            {{ itm[h.key] }}
          </td>
        </template>
      </tr>
    </template>
    </tbody>
  </table>
</template>
