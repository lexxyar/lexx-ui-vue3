<template>
  <lx-pagination :total="totalItemsCount" :items-per-page="10" :current-page="currentPage"
                 @pagechange="onPageChange"/>
  <span>Curent page is {{ currentPage }}</span>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Pagination",
  data() {
    return ({
      totalItemsCount: 26,
      currentPage: 3,
    })
  },
  methods: {
    onPageChange(e:any) {
      this.currentPage = e
    }
  }
})
</script>

<style scoped>

</style>
