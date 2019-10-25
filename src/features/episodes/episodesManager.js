import EpisodesService from './episodesService'

export class EpisodesManger {
  returnEpisodes = async () => {
    try {
      return await EpisodesService.returnEpisodes();
    } catch (error) {
      throw new Error("An error has occurred while trying to get episodes")
    }
  }
}
export default new EpisodesManger();
