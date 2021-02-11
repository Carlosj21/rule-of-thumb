import { homeTypes } from './homeTypes';

export const mutations = {
  [homeTypes.mutations.SET_CANDIDATES](state, payload) {
    state.candidates = payload;
  },
  [homeTypes.mutations.SET_HEADLIGHTS](state, payload) {
    state.headLights = payload;
  },
  [homeTypes.mutations.SUBMIT_VOTE](state, {
    id,
    voteValue,
  }) {
    state.candidates.forEach((cand) => {
      if (cand.id === id) {
        switch (voteValue) {
          case 'up':
            // eslint-disable-next-line no-param-reassign
            cand.thumbsUp += 1;
            break;
          case 'down':
            // eslint-disable-next-line no-param-reassign
            cand.thumbsDown += 1;
            break;
          default:
            break;
        }
      }
    });
  },
};

export default {};
