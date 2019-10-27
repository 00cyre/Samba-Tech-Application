import axios from 'axios';

const URI_EPISODES = 'https://www.breakingbadapi.com/api/episodes/';

export class EpisodesService {
  async returnEpisodes() {
    return axios.get(URI_EPISODES);
  }
}
export default new EpisodesService();
