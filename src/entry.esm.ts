import {App, Plugin} from 'vue';

// Import vue components
import * as components from '@/lib-components/index';

// import '@/lib-components/styles/index.scss'

// install function executed by Vue.use()
const install: Exclude<Plugin['install'], undefined> = function installLexxUiVue3(app: App) {
  Object.entries(components).forEach(([componentName, component]) => {
    // @ts-ignore
    app.component(componentName, component);
  });
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components/index';
