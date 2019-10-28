import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getCharacters } from '../characterOperations';
import CharacterManager from '../../characterManager';

const mock = new MockAdapter(axios);
describe('Character Operations', () => {
    beforeEach(() => {
        mock.reset();
    });

    it('getCharacters - Success', async () => {
        CharacterManager.returnCharacters = jest.fn(() => {
            return { data: { success: true } };
        });
        const dispatch = jest.fn();
        await getCharacters()(dispatch);

        expect(dispatch.mock.calls.length).toEqual(1);
        expect(dispatch.mock.calls[0][0].payload.characters.success).toEqual(true);
    });
    it('getCharacters - Failure', async () => {
        CharacterManager.returnCharacters = jest.fn(() => {
            throw new Error();
        });
        const dispatch = jest.fn();
        await getCharacters()(dispatch);

        expect(dispatch.mock.calls.length).toEqual(1);
        expect(dispatch.mock.calls[0][0].type).toEqual("ERROR");
    });
});
