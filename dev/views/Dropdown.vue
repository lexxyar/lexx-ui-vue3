<template>
  <!--  <div class="relative inline-block">-->
  <lx-button styl="primary" class="relative" area="menu-button">Click
    <lx-dd-menu>
      <template v-for="itm in ddItems">
        <lx-dd-menu-item @click="onClick(itm)">{{ itm }}</lx-dd-menu-item>
      </template>
    </lx-dd-menu>
  </lx-button>
  <!--  </div>-->
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Dropdown",
  data() {
    return ({
      ddItems: ['Profile', 'Projects', 'Settings', 'Sign Out'],
    })
  },
  methods: {
    onClick(itm:any) {
      console.log(itm)
    }
  }
})
</script>

<style scoped>

</style>
