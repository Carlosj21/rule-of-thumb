export const MODULE_HOME = '@module/home';

export const homeTypes = {
  PATH: `${MODULE_HOME}`,
  getters: {},
  mutations: {
    SET_CANDIDATES: '@mutations/setCandidates',
    SET_HEADLIGHTS: '@mutations/setHeadlights',
  },
  actions: {
    GET_CANDIDATES: '@actions/getCandidates',
    GET_HEADLIGHTS: '@actions/getHeadlights',
  },
};
