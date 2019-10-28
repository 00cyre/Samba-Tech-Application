import CharacterService from '../characterService'
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const URI_CHARACTER = 'https://www.breakingbadapi.com/api/characters/';

const mock = new MockAdapter(axios);
describe('CharacterService', () => {
     it('Should test returnCharacters - Sucess', async () => {
         mock.onGet(URI_CHARACTER).reply(200,[{success:true}]);
         const returnCharacters = await CharacterService.returnCharacters();
         expect(returnCharacters.data[0].success).toEqual(true);
     });
});