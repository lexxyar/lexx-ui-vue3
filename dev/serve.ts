import { createApp } from 'vue'
import Dev from './serve.vue'
// const Dev = require('./serve')
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "app.use" call
import LexxUiVue3 from '@/entry.esm'

import router from './router/index'

// import("./assets/dev.scss")

createApp(Dev).use(LexxUiVue3).use(router).mount('#app');
