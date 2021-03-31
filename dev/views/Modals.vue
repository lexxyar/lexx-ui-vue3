<template>
  <template v-for="typ in types">
    <lx-button class="mr-3" typ="pill" @click="typ.show = true">{{ typ.typ.toUpperCase() }}</lx-button>

    <lx-modal :typ="typ.typ" @close="typ.show = false" :show="typ.show">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem et iure laudantium odit officia
      perferendis quasi sit veritatis voluptate!
    </lx-modal>
  </template>

  <lx-button typ="pill" @click="showYesNo = true">Yes/No</lx-button>

  <lx-modal @close="showYesNo = false" :show="showYesNo" :yes-no="true">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, at distinctio doloremque labore odio quibusdam.
  </lx-modal>

</template>

<script>
export default {
  name: "Modals",
  data() {
    return ({
      types: [
        {typ: 'info', show: false},
        {typ: 'warning', show: false},
        {typ: 'error', show: false}
      ],
      showYesNo: false,
    })
  },
  methods: {}
}
</script>

<style scoped>

</style>
