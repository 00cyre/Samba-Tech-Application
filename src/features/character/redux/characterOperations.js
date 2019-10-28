import CharacterManager from '../characterManager';
import { getCharacter } from './characterActions';
import { returnError } from './dispatchHelper';

export const getCharacters = () => async dispatch => {
  try {
    const resCharacter = await CharacterManager.returnCharacters();
    dispatch(getCharacter(resCharacter.data));
  } catch (error) {
    dispatch(
      returnError('characters')
    );
  }
};