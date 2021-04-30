<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SearchhelpInputs",
  setup() {

  },
  data() {
    return ({
      inputValue: 2,
      tableHeader:[
        {key: 'id', title: 'ID'},
        {key: 'company', title: 'Компания'},
        {key: 'program', title: 'ERP'},
      ],
      tableContent:[
        {id: 1, company: 'First soft', program:'1C'},
        {id: 2, company: 'Railway course', program:'SAP'},
        {id: 3, company: 'Oil & Gas company', program:'SAP'},
        {id: 4, company: 'Wheel logistic', program:'Axapta'},
      ]
    })
  }
})
</script>

<template>
  <lx-card>
    <span>{{inputValue}}</span>
    <lx-search-help label="Search help input"
                    help-title="Search help title"
                    v-model="inputValue"
                    :tableHeader="tableHeader"
                    :tableContent="tableContent"
                    valueField="company"
    ></lx-search-help>
  </lx-card>
</template>
