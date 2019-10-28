import * as characterActions from './characterActions';

export const INITIAL_STATE = {
  Characters: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case characterActions.GET_CHARACTER:
      return { ...state, Characters: action.payload.characters }
    default:
      return state;
  }
};
