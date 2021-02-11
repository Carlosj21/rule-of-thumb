import homeApi from '@/api/home/homeApi';
import { homeTypes } from './homeTypes';

export const actions = {
  [homeTypes.actions.SET_LOCAL_STORAGE]({ state }) {
    localStorage.setItem('candidates', JSON.stringify(state.candidates));
    localStorage.setItem('headLights', JSON.stringify(state.headLights));
  },
  [homeTypes.actions.GET_DATA]({
    commit,
    dispatch,
  }) {
    const candidates = JSON.parse(localStorage.getItem('candidates')) || [];
    const headLights = JSON.parse(localStorage.getItem('headLights')) || {};
    if (candidates.length > 0) {
      commit(homeTypes.mutations.SET_CANDIDATES, candidates);
    } else {
      dispatch(homeTypes.actions.GET_CANDIDATES);
    }
    if (Object.keys(headLights).length > 0) {
      commit(homeTypes.mutations.SET_HEADLIGHTS, headLights);
    } else {
      dispatch(homeTypes.actions.GET_HEADLIGHTS);
    }
  },
  [homeTypes.actions.GET_CANDIDATES]({
    commit,
    dispatch,
  }) {
    // loader on
    homeApi.getCandidates()
      .then((response) => {
        commit(homeTypes.mutations.SET_CANDIDATES, response.data);
        dispatch(homeTypes.actions.SET_LOCAL_STORAGE);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        // loader off
      });
  },
  [homeTypes.actions.GET_HEADLIGHTS]({
    commit,
    dispatch,
  }) {
    // loader on
    homeApi.getHeadlights()
      .then((response) => {
        commit(homeTypes.mutations.SET_HEADLIGHTS, response.data);
        dispatch(homeTypes.actions.SET_LOCAL_STORAGE);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        // loader off
      });
  },
};

export default {};
