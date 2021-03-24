<!--suppress HtmlUnknownTag -->
<template>
  <div class="flex flex-wrap">
    <lx-card class="w-112 mr-5 mb-5">
      <template #header>Control types</template>
      <span>Text: {{ text }}</span>
      <lx-input class="mb-1" placeholder="Search text..." v-model="text"></lx-input>
      <span>Single: {{ selected1 }}</span>
      <lx-select-input class="mb-1" :options="options" v-model="selected1" optionValueField="value">
        <template #item="{item}">
          <img
              :src="item.img"
              alt=""
              class="flex-shrink-0 h-6 w-6 rounded-full">
          <span class="ml-3 block truncate font-semibold"
                :class="{ 'font-semibold': item.value === selected1, 'font-normal': !(item.value === selected1) }">
                            {{ item.title }}
                          </span>
        </template>
      </lx-select-input>
      <!--      <span>Multy: {{selected}}</span>-->
      <!--      <lx-select-input class="mb-1" :options="options" :multiple="true" ></lx-select-input>-->
      <span>Textarea: {{ textarea }}</span>
      <lx-textarea-input v-model="textarea"></lx-textarea-input>
      <span>File: {{ file }}</span>
      <lx-file-input v-model="file"></lx-file-input>
    </lx-card>

    <lx-card class="w-112 mr-5 mb-5">
      <template #header>Labeled</template>
      <lx-input class="mb-1" placeholder="Search text..." label="Search"></lx-input>
      <lx-select-input class="mb-1" :options="options" label="Select"></lx-select-input>
      <lx-select-input class="mb-1" :options="options" :multiple="true" label="Multiselect"></lx-select-input>
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
      selected1: '2',
      // selected:[],
      textarea: 'Long text input',
      file: '',
      options: [
        {
          value: 1,
          title: 'Wade Cooper',
          img: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
        },
        {
          value: 2,
          title: 'Arlene Mccoy',
          img: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
        },
        {
          value: 3,
          title: 'Devon Webb',
          img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80'
        },
        {
          value: 4,
          title: 'Tom Cook',
          img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
        },
        {
          value: 5,
          title: 'Tanya Fox',
          img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
        },
        {
          value: 6,
          title: 'Hellen Schmidt',
          img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
        },
        {
          value: 7,
          title: 'Caroline Schultz',
          img: 'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
        },
        {
          value: 8,
          title: 'Mason Heaney',
          img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
        },
        {
          value: 9,
          title: 'Claudie Smitham',
          img: 'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
        },
        {
          value: 10,
          title: 'Emil Schaefer',
          img: 'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
        },
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
  watch: {
    selected(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>

</style>