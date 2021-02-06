export const MODULE_HOME = '@module/home';

export const homeTypes = {
  PATH: `${MODULE_HOME}`,
  getters: {},
  mutations: {
    SET_CANDIDATES: '@mutations/setCandidates',
  },
  actions: {
    GET_CANDIDATES: '@actions/getCandidates',
  },
};
