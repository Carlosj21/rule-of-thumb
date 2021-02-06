import Vue from 'vue';
import Vuex from 'vuex';
import { name as homeModuleName, module as homeModuleContent } from '@/store/modules/home/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    [homeModuleName]: homeModuleContent,
  },
});

export default {};
