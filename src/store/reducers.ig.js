import { combineReducers } from 'redux';
import { characterReducer } from '../features/character/redux';
const reducer = combineReducers({
  characterReducer: characterReducer
});
export default reducer;
