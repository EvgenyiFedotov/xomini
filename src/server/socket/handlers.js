import * as usersActs from 'reducers/server/users/actions';
import * as roomsActs from 'reducers/server/rooms/actions';

export function connection(common) {
   const { dispatch, getState, socketId } = common;

   dispatch(usersActs.add(socketId));

   inRoom(common, '@login', '@nameRoom');
};

export function inRoom(common, login, nameRoom) {
   const { dispatch, getState, socketId } = common;

   dispatch(usersActs.login(socketId, login));
   dispatch(roomsActs.addUser(nameRoom, login));
   dispatch(roomsActs.addUser(nameRoom, login + '#1'));
   dispatch(roomsActs.removeUser(login + '#1'));

   console.log(getState().rooms);
};
