import SuggestionService from './suggestionService'

export class SuggestionManager {
  sendSuggestion = async (body) => {
    try {
      return await SuggestionService.sendSuggestion(body);
    } catch (error) {
      throw new Error("An error has occurred while trying to get suggestion")
    }
  }
}
export default new SuggestionManager();
