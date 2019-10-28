import CharacterService from '../characterService'
import CharacterManager from '../characterManager'

describe('CharacterManager', () => {
    it('Should test returnCharacters - Success', async () => {
        CharacterService.returnCharacters = jest.fn(() => {
            return [{ success: true }]
        })
        const returnCharacters = await CharacterManager.returnCharacters();
        expect(returnCharacters[0].success).toEqual(true);
    });
    it('Should test returnCharacters - Failure', async () => {
        CharacterService.returnCharacters = jest.fn(() => {
            throw new Error();
        })
        try {
            await CharacterManager.returnCharacters();
        } catch (error) {
            expect(error.message).toEqual("An error has occurred while trying to get character(s)");
        }
    });
});