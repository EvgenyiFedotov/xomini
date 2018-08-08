import { combineReducers } from 'redux';
import users from './users';
import rooms from './rooms';

export default combineReducers({
   users,
   rooms
});

export * as users from './users';
export * as rooms from './rooms';
