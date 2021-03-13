<template>
  <lxCard class="mr-5 mb-5">
    <template #header>
      Card header
    </template>

    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.
    </p>

    <template #footer>
      <a href="#" class="btn btn-primary">
        Click Me
      </a>
    </template>
  </lxCard>

  <lxCard :dark="true">
    <template #header>
      Dark Card header
    </template>

    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.
    </p>

    <template #footer>
      <a href="#" class="btn btn-primary">
        Click Me
      </a>
    </template>
  </lxCard>
</template>

<script>
export default {
  name: "CardBase"
}
</script>

<style scoped>

</style>