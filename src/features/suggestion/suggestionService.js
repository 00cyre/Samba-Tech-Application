import axios from 'axios';

const URI_EPISODES = 'https://frontendtestesamba.free.beeceptor.com/breaking-bad/suggestions';

export class SuggestionService {
  async sendSuggestion(body) {
    return await axios.post(URI_EPISODES,body);
  }
}
export default new SuggestionService();
