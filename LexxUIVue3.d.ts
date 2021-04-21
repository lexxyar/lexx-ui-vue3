import { DefineComponent, Plugin } from 'vue';


declare const LexxUIVue3: Exclude<Plugin['install'], undefined>;
export default LexxUIVue3;

export const LexxUIVue: DefineComponent<{}, {}, any>;
