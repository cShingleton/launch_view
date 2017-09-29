import { combineReducers } from 'redux';
import LaunchReducer from './modules/reducers/launchReducers';

export default combineReducers({
  launches: LaunchReducer,
});
