<template>
  <lx-sidebar header="Lara" :open="opened" @toggle="onToggle">
    <lx-sidebar-item :count="4" :active="true">
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </template>
      Dashboard
    </lx-sidebar-item>
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
        <lx-sidebar-item>Buttons</lx-sidebar-item>
        <lx-sidebar-item>Cards</lx-sidebar-item>
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
  </lx-sidebar>
</template>

<script>
import LxSidebar from "@/lib-components/lxSidebar/lxSidebar";
import LxSidebarDdItem from "@/lib-components/lxSidebar/lxSidebarDdItem";

export default {
  name: "Sidebar",
  components: {LxSidebarDdItem, LxSidebar},
  data() {
    return ({
      opened: true,
    })
  },
  methods:{
    onToggle(e){
      this.opened = e;
      // console.log(e)
    }
  }
}
</script>

<style scoped>

</style>