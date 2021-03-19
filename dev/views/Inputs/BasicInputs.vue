<!--suppress HtmlUnknownTag -->
<template>
  <div class="flex flex-wrap">
    <lx-card class="w-112 mr-5 mb-5">
      <template #header>Control types</template>
      <span>Text: {{ text }}</span>
      <lx-input class="mb-1" placeholder="Search text..." v-model="text"></lx-input>
      <span>Single: {{ selected1 }}</span>
      <lx-select-input class="mb-1" :options="options" v-model="selected1"></lx-select-input>
<!--      <span>Multy: {{selected}}</span>-->
      <lx-select-input class="mb-1" :options="options" :multiple="true" ></lx-select-input>
      <span>Textarea: {{textarea}}</span>
      <lx-textarea-input v-model="textarea"></lx-textarea-input>
      <span>File: {{file}}</span>
      <lx-file-input v-model="file"></lx-file-input>
    </lx-card>

    <lx-card class="w-112 mr-5 mb-5">
      <template #header>Labeled</template>
      <lx-input class="mb-1" placeholder="Search text..." label="Search"></lx-input>
      <lx-select-input class="mb-1" :options="options" label="Select"></lx-select-input>
      <lx-select-input class="mb-1" :options="options" :multiple="true" label="Multiselect" ></lx-select-input>
      <lx-textarea-input label="Textarea"></lx-textarea-input>
      <lx-file-input label="File selection"></lx-file-input>
    </lx-card>

    <!--    <div class="row">-->
    <!--      <div class="col-6">-->
    <!--        <lx-card>-->
    <!--          <template #header>Radios & checkboxes</template>-->
    <!--          <lx-input class="mb-1" placeholder="Search text..."></lx-input>-->
    <!--          <template v-for="cb in checkboxes">-->
    <!--            <lx-checkbox v-model="checked" :val="cb.value" :label="cb.label"/>-->
    <!--          </template>-->
    <!--          <div class="mb-5"></div>-->
    <!--          <template v-for="rb in radiobuttons">-->
    <!--            <lx-radio v-model="rbChecked" :val="rb.value" :label="rb.label" :group="rb.group"/>-->
    <!--          </template>-->
    <!--        </lx-card>-->
    <!--      </div>-->
    <!--      <div class="col-6">-->
    <lx-card class="w-112 mr-5 mb-5">
      <template #header>Disabled</template>

      <lx-input class="mb-1" placeholder="Search text..." :readonly="true"></lx-input>
      <lx-select-input class="mb-1" :options="options" :readonly="true"></lx-select-input>
      <lx-select-input class="mb-1" :options="options" :multiple="true" :readonly="true"></lx-select-input>
      <lx-textarea-input class="mb-1" :readonly="true"></lx-textarea-input>
      <lx-file-input class="mb-5" :readonly="true"></lx-file-input>

<!--      <template v-for="cb in checkboxes">-->
<!--        <lx-checkbox v-model="checked" :val="cb.value" :label="cb.label" :readonly="true"/>-->
<!--      </template>-->
<!--      <div class="mb-5"></div>-->
<!--      <template v-for="rb in radiobuttons">-->
<!--        <lx-radio v-model="rbChecked" :val="rb.value" :label="rb.label" :group="rb.group" :readonly="true"/>-->
<!--      </template>-->
    </lx-card>


  </div>
</template>

<script>
export default {
  name: "BasicInputs",

  data() {
    return ({
      text: '',
      selected1: '4',
      // selected:[],
      textarea:'Long text input',
      file:'',
      options: [
        {value: 1, title: 'JavaScript'},
        {value: 2, title: 'C++'},
        {value: 3, title: 'C#'},
        {value: 4, title: 'Python'},
        {value: 5, title: 'PHP'},
      ],
      checkboxes: [
        {label: 'Checkbox 1', value: 'CB1'},
        {label: 'Checkbox 2', value: 'CB2'},
        {label: 'Checkbox 3', value: 'CB3'},
      ],
      checked: ['CB3'],
      radiobuttons: [
        {label: 'Ready', value: 'ready', group: 'gr1'},
        {label: 'Steady', value: 'steady', group: 'gr1'},
        {label: 'Go', value: 'go', group: 'gr1'},
      ],
      rbChecked: 'go',
    })
  },
  watch:{
    selected(val){
      console.log(val)
    }
  }
}
</script>

<style scoped>

</style>