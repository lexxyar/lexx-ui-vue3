<template>
  <template v-for="styl in styls">
    <lx-badge :styl="styl" class="mr-3">{{ styl }}</lx-badge>
  </template>
</template>

<script>
export default {
  name: "Badges",
  data() {
    return ({
      styls: ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'dark', 'light'],
    })
  }
}
</script>

<style scoped>

</style>