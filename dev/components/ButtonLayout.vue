<template>
  <div class="flex flex-wrap justify-center">
    <lxCard class="mb-5" :class="cardWidthClass">
      <template #header>
        Normal
      </template>

      <div class="card-body flex flex-wrap">

        <template v-for="styl in styls">
          <lxButton class="mr-2 mb-2 capitalize" :typ="typ" :styl="styl">{{ styl }}</lxButton>
        </template>

      </div>
    </lxCard>

    <lxCard class="mb-5" :class="cardWidthClass">
      <template #header>
        Disabled
      </template>

      <div class="card-body">

        <template v-for="styl in styls">
          <lxButton class="mr-2 mb-2 capitalize" :typ="typ" :styl="styl" :disabled="true">{{ styl }}</lxButton>
        </template>

      </div>
    </lxCard>

    <lxCard class="mb-5" :class="cardWidthClass" v-if="typ !== 'flat'">
      <template #header>
        Outline
      </template>

      <div>

        <template v-for="styl in styls">
          <lxButton class="mr-2 mb-2 capitalize" :typ="typ" :styl="styl" :outline="true">{{ styl }}</lxButton>
        </template>

      </div>
    </lxCard>

    <lxCard class="mb-5" :class="cardWidthClass">
      <template #header>
        Iconed
      </template>

      <div class="flex flex-wrap">

        <template v-for="styl in styls">
          <lxButton class="mr-2 mb-2" :typ="typ" :styl="styl" :iconed="true"
                    v-html="getRandomIcon(`<span class='ml-2 capitalize'>${styl}</span>`)"></lxButton>
        </template>

      </div>
    </lxCard>

    <lxCard class="mb-5" :class="cardWidthClass" v-if="typ !== 'flat'">
      <template #header>
        Iconed outline
      </template>

      <div class="flex flex-wrap">

        <template v-for="styl in styls">
          <lxButton class="mr-2 mb-2" :typ="typ" :styl="styl" :iconed="true" :outline="true"
                    v-html="getRandomIcon(`<span class='ml-2 capitalize'>${styl}</span>`)"></lxButton>
        </template>

      </div>
    </lxCard>

    <lxCard class="mb-5" :class="cardWidthClass">
      <template #header>
        Icon only
      </template>

      <div class="flex flex-wrap">

        <template v-for="styl in styls">
          <lxButton class="mr-2 mb-2" :typ="typ" :styl="styl" :iconed="true" v-html="getRandomIcon()"></lxButton>
        </template>

      </div>
    </lxCard>

    <lxCard class="mb-5" :class="cardWidthClass" v-if="typ !== 'flat'">
      <template #header>
        Group
      </template>

      <div class="flex flex-wrap">

        <template v-for="styl in someStyl">
          <div class="btn-group mr-2 mb-2">
            <lxButton :typ="typ" :styl="styl">Left</lxButton>
            <lxButton :typ="typ" :styl="styl">Middle</lxButton>
            <lxButton :typ="typ" :styl="styl">Right</lxButton>
          </div>
        </template>
      </div>
    </lxCard>

    <lxCard class="mb-5" :class="cardWidthClass">
      <template #header>
        Size
      </template>

      <div class="flex flex-wrap items-center">
        <template v-for="sz in sizes">
          <lxButton :typ="typ" class="mr-2" styl="primary" :size="sz.class">{{ sz.title }}</lxButton>
        </template>
      </div>
    </lxCard>
  </div>
</template>

<script>
export default {
  name: "ButtonLayout",
  props: {
    typ: {
      type: String,
      validator: (value) => {
        return ['', 'flat', 'rounded', 'pill'].indexOf(value) !== -1
      },
      default: '',
    },
  },
  data() {
    return ({
      cardWidthClass: 'w-112',
      styls: ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'dark', 'light'],
      someStyl: ['primary', 'success', 'dark'],
      sizes: [{title: 'Large', class: 'lg'}, {title: 'Normal', class: 'md'}, {title: 'Small', class: 'sm'}],
      icons: [
        '<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
        '                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />\n' +
        '                        </svg>',
        '<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
        '                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />\n' +
        '                        </svg>',
        '<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
        '                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />\n' +
        '                        </svg>',
        '<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
        '                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />\n' +
        '                        </svg>',
        '<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
        '                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />\n' +
        '                        </svg>',
        '<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
        '                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n' +
        '                        </svg>',
        '<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
        '                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />\n' +
        '                        </svg>',
      ],
    })
  },
  methods: {
    getRandomIcon(text = '') {
      let icon = this.icons[Math.floor(Math.random() * this.icons.length)]
      return text ? icon + text : icon
    }
  }
}
</script>

<style scoped>

</style>