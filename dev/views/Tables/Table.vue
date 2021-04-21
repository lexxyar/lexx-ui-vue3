<template>
  <lx-table :header="thead" :data="data">
    <template #user="{ field, item }">
      <div class="flex flex-start flex-nowrap">
      <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
        <path
            d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
							014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
							8-4z"></path>
      </svg>
      {{ item[field.key] }}
      </div>
    </template>
  </lx-table>
</template>

<script>
import {defineComponent} from 'vue'
import LxTable from "@/lib-components/lxTable/lxTable";

export default defineComponent({
  name: "Table",
  components: {LxTable},
  data() {
    return ({
      thead: [
        {key: 'id', title: 'ID'},
        {key: 'name', title: 'Название'},
        {key: 'user', title: 'Пользователь'},
        {key: 'begda', title: 'Выдан'},
        {key: 'endda', title: 'Истекает'},
        {key: 'limit', title: 'Лимит (Credits)'},
        {key: 'daylimit', title: 'Суточный лимит'},
        {key: 'bill', title: 'Счет'},
        {key: 'status', title: 'Статус'}
      ],
      data: [
        {
          id: 57,
          name: 'Unlimited',
          user: 'common',
          begda: '10/22/2020',
          endda: 'Никогда',
          limit: '0.00(10000)',
          daylimit: '0 (100)',
          bill: '#INV10056',
          status: 'Одобрен',
          checked: false,
        },
        {
          id: 56,
          name: 'Unlimited',
          user: 'buyer',
          begda: '06/27/2019',
          endda: '07/08/2019 23:59:59',
          limit: '24.00(100)',
          daylimit: '24 (100)',
          bill: '#INV10042',
          status: 'Одобрен',
          checked: false,
        },
        {
          id: 54,
          name: '1 day instant access',
          user: 'buyer',
          begda: '04/10/2017',
          endda: '04/12/2017 13:59:59',
          limit: '2.00(15)',
          daylimit: 'Нет',
          bill: '#INV10031',
          status: 'Одобрен',
          checked: false,
        },
      ]
    })
  },

})
</script>

<style scoped>

</style>
