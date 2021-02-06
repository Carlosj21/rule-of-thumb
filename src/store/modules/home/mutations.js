import { homeTypes as types } from './homeTypes';

export const mutations = {
  [types.mutations.SET_CANDIDATES](state, payload) {
    state.candidates = payload;
  },
};

export default {};
