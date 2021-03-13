<template>
  <div class="btn-group">

    <lx-button :disabled="!canPrev()" @click="onChangePage(-1)">{{ prevButtonText }}</lx-button>
    <template v-for="i in pageCount">
      <lx-button :disabled="i === currentPageSync" @click="onPageClick(i)">{{ i }}</lx-button>
    </template>
    <lx-button :disabled="!canNext()" @click="onChangePage(1)">{{ nextButtonText }}</lx-button>

  </div>
</template>

<script>
import {defineComponent} from 'vue'
import LxButton from "@/lib-components/lxButton/lxButton.vue";

export default defineComponent({
  name: "lxPagination",
  components: {LxButton},
  props: {
    total: {type: Number, default: 1},
    itemsPerPage: {type: Number, default: 10},
    currentPage: {type: Number, default: 1},
    prevButtonText: {type: String, default: 'Previous'},
    nextButtonText: {type: String, default: 'Next'},
  },
  data() {
    return ({
      currentPageSync: this.currentPage,
    })
  },
  methods: {
    onPageClick(num) {
      this.currentPageSync = num
      this.$emit('pagechange', this.currentPageSync)
    },
    onChangePage(dif) {
      this.currentPageSync += dif
      this.currentPageSync = this.currentPageSync < 1 ? 1 : this.currentPageSync
      this.currentPageSync = this.currentPageSync > this.pageCount ? this.pageCount : this.currentPageSync
      this.$emit('pagechange', this.currentPageSync)
    },
    canPrev() {
      return this.currentPageSync > 1
    },
    canNext() {
      return this.currentPageSync < this.pageCount
    }
  },
  computed: {
    pageCount() {
      const res = Math.ceil(this.total / this.itemsPerPage)
      return res === 0 ? 1 : res
    }
  },
  watch: {
    currentPage(newVal) {
      this.currentPageSync = newVal
    }
  }
})
</script>

<style scoped>

</style>