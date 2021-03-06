import { state } from './state';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { MODULE_HOME } from './homeTypes';

export const homeModuleContent = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export const homeModuleName = MODULE_HOME;

export default {};
