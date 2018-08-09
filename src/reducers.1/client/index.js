import { combineReducers } from 'redux';
import socket from './socket';
import userInfo from './userInfo';
import room from '../common/room';

export * as socket from './socket';
export * as userInfo from './userInfo';
export * as room from '../common/room';

export default combineReducers({
   socket,
   userInfo,
   room
});
