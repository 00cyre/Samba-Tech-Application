import CharacterService from './characterService'

export class CharacterManger {
  returnCharacters = async () => {
    try {
      return await CharacterService.returnCharacters();
    } catch (error) {
      throw new Error("An error has occurred while trying to get character(s)")
    }
  }
}
export default new CharacterManger();
