import { combineReducers } from 'redux';
import { characterReducer } from '../features/character/redux';
import {episodesReducer} from '../features/episodes/redux'
const reducer = combineReducers({
  characterReducer: characterReducer,
  episodesReducer:episodesReducer
});
export default reducer;
