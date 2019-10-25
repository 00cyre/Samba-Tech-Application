import * as episodesActions from './episodesActions';

export const INITIAL_STATE = {
  Episodes: []
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case episodesActions.GET_EPISODES:
      return { ...state, Episodes: action.payload.episodes }
    default:
      return state;
  }
};
