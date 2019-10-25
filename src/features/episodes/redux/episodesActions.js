
export const GET_EPISODES = 'GET_CHARACTER';

export const getEpisodes = episodes => {
  return {
    type: GET_EPISODES,
    payload: { episodes: episodes }
  }
};