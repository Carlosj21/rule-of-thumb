import homeApi from '@/api/home/homeApi';
import { homeTypes } from './homeTypes';

export const actions = {
  [homeTypes.actions.GET_CANDIDATES]({ commit }) {
    // loader on
    commit(homeTypes.mutations.SET_CANDIDATES, {});
    homeApi.getCandidates()
      .then((response) => {
        commit(homeTypes.mutations.SET_CANDIDATES, response.data);
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
