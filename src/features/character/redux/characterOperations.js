import CharacterManager from '../characterManager';
import { getCharacter } from './characterActions';
export const getCharacters = () => async dispatch => {
  try {
    const resCharacter = await CharacterManager.returnCharacters();
    dispatch(getCharacter(resCharacter.data));
  } catch (error) {
    dispatch(
      () => { return ({ type: 'ERROR', payload: { message: 'An error has occurred while trying to get characters.', variant: 'error' } }) }
    );
  }

};