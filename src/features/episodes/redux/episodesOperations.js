import EpisodesManager from '../episodesManager';
import { getEpisodes } from './episodesActions';
export const getEpisode = () => async dispatch => {
  try {
    const resEpisodes = await EpisodesManager.returnEpisodes();
    dispatch(getEpisodes(resEpisodes.data));
  } catch (error) {
    dispatch(
      () => { return ({ type: 'ERROR', payload: { message: 'An error has occurred while trying to get episodes.', variant: 'error' } }) }
    );
  }

};