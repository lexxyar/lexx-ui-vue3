<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SearchhelpInputs",
  setup() {

  },
  data() {
    return ({
      inputValue: '2',
      tableHeader:[
        {key: 'id', title: 'ID'},
        {key: 'company', title: 'Компания'},
        {key: 'program', title: 'ERP'},
      ],
      tableContent:[
        // {id: 1, company: 'First soft', program:'1C'},
        // {id: 2, company: 'Railway course', program:'SAP'},
        // {id: 3, company: 'Oil & Gas company', program:'SAP'},
        // {id: 4, company: 'Wheel logistic', program:'Axapta'},
      ] as any
    })
  },
  methods:{
    dummyData():any{
      return [
        {id: '1', company: 'First soft', program:'1C'},
        {id: '2', company: 'Railway course', program:'SAP'},
        {id: '3', company: 'Oil & Gas company', program:'SAP'},
        {id: '4', company: 'Wheel logistic', program:'Axapta'},
      ]
    },
    getData(){
      return new Promise((resolve:Function)=>{
        setTimeout(()=>{
          this.tableContent = this.dummyData()
          resolve()
        }, 2)
      })
    }
  },
  created() {
    this.getData().then(()=>{
      console.log(this.tableContent)
    })
    console.log('no data')
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
