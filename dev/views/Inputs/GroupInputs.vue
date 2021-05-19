<!--suppress ALL -->
<template>
  <div class="flex flex-wrap">
    <lx-card class="w-112 mr-5 mb-5">
      <template #header>Groups</template>
      <lx-input label="Prepended" class="mb-1" placeholder="Enter your domain">
        <template #prepend>http://</template>
      </lx-input>
      <lx-input label="Appended" class="mb-1" placeholder="Amount">
        <template #append>.00</template>
      </lx-input>
      <lx-input label="Both" class="mb-1" placeholder="Amount">
        <template #prepend>$</template>
        <template #append>.00</template>
      </lx-input>
      <!--      <lx-select-input class="mb-1" :options="options" v-model="selected1"></lx-select-input>-->
      <!--      <lx-select-input class="mb-1" :options="options" :multiple="true" ></lx-select-input>-->
      <!--      <lx-textarea-input v-model="textarea"></lx-textarea-input>-->
      <!--      <lx-file-input v-model="file"></lx-file-input>-->
    </lx-card>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "GroupInputs",
  data() {
    return ({
      shValues: [
        {key: 'key1', value: 'Key 1'},
        {key: 'key2', value: 'Key 2'},
        {key: 'key3', value: 'Key 3'},
        {key: 'key4', value: 'Key 4'},
      ],
      shFields: [
        {key: 'key', label: 'ID'},
        {key: 'value', label: 'Value'},
      ],
      shSelected: '',
    })
  }
})
</script>

<style scoped>

</style>
