import { homeTypes } from './homeTypes';

export const mutations = {
  [homeTypes.mutations.SET_CANDIDATES](state, payload) {
    state.candidates = payload;
  },
};

export default {};
