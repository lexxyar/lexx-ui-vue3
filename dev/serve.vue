<template>
  <div id="app" class="flex h-screen overflow-y-hidden bg-white">

    <lxSidebar :open="open">
      <template #brand>
        <span :class="{'lg:justify-center': !open}">L</span><span :class="{'hidden': !open}">ara</span>
      </template>
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
          <lx-sidebar-item route="/button-solid">Buttons</lx-sidebar-item>
          <lx-sidebar-item route="/card-base">Cards</lx-sidebar-item>
          <lx-sidebar-item route="/drop-down">Dropdown</lx-sidebar-item>
          <lx-sidebar-item route="/table">Table</lx-sidebar-item>
          <lx-sidebar-item route="/pagination">Pagination</lx-sidebar-item>
          <lx-sidebar-item route="/basic-inputs">Inputs</lx-sidebar-item>
          <lx-sidebar-item route="/badge">Badges</lx-sidebar-item>
        </template>
      </lx-sidebar-dd-item>
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

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'ServeDev',
  data() {
    return ({
      open: true,
    })
  },
  methods: {
    toggleSidebar(e) {
      this.open = e
    }
  }
});
</script>