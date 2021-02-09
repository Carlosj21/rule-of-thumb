import homeApi from '@/api/home/homeApi';
import { homeTypes } from './homeTypes';

export const actions = {
  [homeTypes.actions.SET_LOCAL_STORAGE]({ state }) {
    localStorage.setItem('candidates', JSON.stringify({
      candidates: state.candidates,
      headLights: state.headLights,
    }));
  },
  [homeTypes.actions.GET_DATA]({
    commit,
    dispatch,
  }) {
    if (localStorage.candidates) {
      commit(homeTypes.mutations.SET_CANDIDATES, JSON.parse(localStorage.data).candidates);
      commit(homeTypes.mutations.SET_HEADLIGHTS, JSON.parse(localStorage.data).headLights);
    } else {
      dispatch(homeTypes.actions.GET_CANDIDATES);
      dispatch(homeTypes.actions.GET_HEADLIGHTS);
    }
  },
  [homeTypes.actions.GET_CANDIDATES]({
    commit,
    dispatch,
  }) {
    // loader on
    commit(homeTypes.mutations.SET_CANDIDATES, {});
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
    commit(homeTypes.mutations.SET_HEADLIGHTS, {});
    homeApi.getCandidates()
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
