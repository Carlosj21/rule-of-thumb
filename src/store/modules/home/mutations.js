import { homeTypes } from './homeTypes';

export const mutations = {
  [homeTypes.mutations.SET_CANDIDATES](state, payload) {
    state.candidates = payload;
  },
  [homeTypes.mutations.SET_HEADLIGHTS](state, payload) {
    state.headLights = payload;
  },
};

export default {};
