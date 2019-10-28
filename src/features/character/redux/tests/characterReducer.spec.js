import characterReducer from '../characterReducer';
import * as characterActions from '../characterActions';
describe('Character Reducer', () => {
  const state = {
    characters: undefined
  };
  it('GET_CHARACTER', () => {
    const newState = characterReducer(state, {
      type: characterActions.GET_CHARACTER,
      payload: { characters: state.characters }
    });
    expect(newState).toEqual({ ...state, characters: state.characters });
  });
  
  it('DEFAULT CASE REDUCER', () => {
    const newState = characterReducer(state, {
      type: 'none',
      payload: { characters: state.characters }
    });
    expect(newState).toEqual(state);
  });
});
