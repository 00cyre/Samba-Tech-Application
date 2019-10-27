import axios from 'axios';

const URI_CHARACTER = 'https://www.breakingbadapi.com/api/characters/';

export class CharacterService {
  async returnCharacters() {
    return await axios.get(URI_CHARACTER);
  }
}
export default new CharacterService();
