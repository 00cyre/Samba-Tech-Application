import axios from 'axios';

const URI_CHARACTER = process.env.BASE_URI + 'characters/';

export class CharacterService {
  async returnCharacters() {
    return axios.get(URI_CHARACTER);
  }
}
export default new CharacterService();
