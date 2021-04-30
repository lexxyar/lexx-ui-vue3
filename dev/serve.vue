<!--suppress HtmlUnknownTag -->
<template>
  <div id="app" class="flex h-screen overflow-y-hidden bg-white">

    <lxSidebar :open="open" @toggle="toggleSidebar">
      <template #brand>
        <span :class="{'lg:justify-center': !open}">L</span><span :class="{'hidden': !open}">ara</span>
      </template>

      <!--        Buttons-->
      <lx-sidebar-dd-item>
        <template #svg>
          <svg focusable="false" data-prefix="fas" data-icon="power-off" role="img"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
               class="w-5 h-5 pr-1">
            <path fill="currentColor"
                  d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
                  class=""></path>
          </svg>
        </template>
        Buttons
        <template #submenu>
          <lx-sidebar-item to="/button-solid">Solid</lx-sidebar-item>
          <lx-sidebar-item to="/button-rounded">Rounded</lx-sidebar-item>
          <lx-sidebar-item to="/button-pill">Pill</lx-sidebar-item>
          <lx-sidebar-item to="/button-flat">Flat</lx-sidebar-item>
        </template>
      </lx-sidebar-dd-item>
      <!--      /Buttons-->

      <!--      Inputs-->
      <lx-sidebar-dd-item>
        <template #svg>
          <svg focusable="false" data-prefix="fas" data-icon="paragraph" role="img"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
               class="w-5 h-5 pr-1">
            <path fill="currentColor"
                  d="M448 48v32a16 16 0 0 1-16 16h-48v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V96h-32v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V352h-32a160 160 0 0 1 0-320h240a16 16 0 0 1 16 16z"
                  class=""></path>
          </svg>
        </template>
        Inputs
        <template #submenu>
          <lx-sidebar-item to="/basic-inputs">Basic</lx-sidebar-item>
          <lx-sidebar-item to="/group-inputs">Input groups</lx-sidebar-item>
          <lx-sidebar-item to="/searchhelp-inputs">Search help</lx-sidebar-item>
        </template>
      </lx-sidebar-dd-item>
      <!--      /Inputs-->

      <!--      Components-->
      <lx-sidebar-dd-item>
        <template #svg>
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
               data-v-0eb14a79="">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  data-v-0eb14a79=""></path>
          </svg>
        </template>
        Components
        <template #submenu>
          <lx-sidebar-item to="/card-base">Cards</lx-sidebar-item>
          <lx-sidebar-item to="/drop-down">Dropdown</lx-sidebar-item>
          <lx-sidebar-item to="/table">Table</lx-sidebar-item>
          <lx-sidebar-item to="/pagination">Pagination</lx-sidebar-item>
          <lx-sidebar-item to="/badge">Badges</lx-sidebar-item>
          <lx-sidebar-item to="/modal">Modals</lx-sidebar-item>
        </template>
      </lx-sidebar-dd-item>
      <!--      /Components-->

      <!--      Pages-->
      <lx-sidebar-dd-item>
        <template #svg>
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </template>
        Pages
        <template #submenu>
          <lx-sidebar-item>Login</lx-sidebar-item>
          <lx-sidebar-item>404</lx-sidebar-item>
          <lx-sidebar-item>Profile</lx-sidebar-item>
          <lx-sidebar-item>Prices</lx-sidebar-item>
        </template>
      </lx-sidebar-dd-item>
      <!--      /Pages-->

    </lxSidebar>

    <!--    <lexx-ui-vue3-sample />-->
    <div class="flex flex-col flex-1 h-full overflow-hidden bg-gray-100">

      <lx-navbar @toggleSidebar="toggleSidebar" :sidebarOpen="open">

      </lx-navbar>
      <!--      <template v-for="route in $router.getRoutes()">-->
      <!--        <router-link :to="route.path"> {{ route.name }}</router-link>-->
      <!--      </template>-->
      <main class="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">
        <router-view/>
      </main>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'ServeDev',
  data() {
    return ({
      open: true,
    })
  },
  methods: {
    toggleSidebar(e: any) {
      this.open = e
    }
  }
});
</script>
