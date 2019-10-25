
export const GET_CHARACTER = 'GET_CHARACTER';

export const getCharacter = characters => {
  return {
    type: GET_CHARACTER,
    payload: { characters: characters }
  }
};