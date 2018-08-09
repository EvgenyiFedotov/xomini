import { combineReducers } from 'redux';
import users from './users';
import games from './games';

export * as users from './users';
export * as games from './users';

export default combineReducers({
   users,
   games
});
