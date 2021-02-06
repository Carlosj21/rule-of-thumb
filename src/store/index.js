import Vue from 'vue';
import Vuex from 'vuex';
import { homeModuleName, homeModuleContent } from '@/store/modules/home';

Vue.use(Vuex);

export const index = new Vuex.Store({
  modules: {
    [homeModuleName]: homeModuleContent,
  },
});

export default {};
