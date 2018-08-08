import { combineReducers } from 'redux';
import socket from './socket';

export default combineReducers({
   socket
});

export * as socket from './socket';
