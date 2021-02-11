export const MODULE_HOME = '@module/home';

export const homeTypes = {
  PATH: `${MODULE_HOME}`,
  getters: {},
  mutations: {
    SET_CANDIDATES: '@mutations/setCandidates',
    SET_HEADLIGHTS: '@mutations/setHeadlights',
    SUBMIT_VOTE: '@mutations/submitVote',
  },
  actions: {
    SET_LOCAL_STORAGE: '@actions/setLocalStorage',
    GET_DATA: '@actions/getData',
    GET_CANDIDATES: '@actions/getCandidates',
    GET_HEADLIGHTS: '@actions/getHeadlights',
  },
};
