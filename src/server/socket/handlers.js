import { usersActions } from 'reducers/server/users';
import { roomsActions } from 'reducers/server/rooms';
import { gamesActions } from 'reducers/server/games';

export function connection(common) {
   const { dispatch, getState, socketId } = common;

   dispatch(usersActions.add(socketId));
   dispatch(usersActions.login(socketId, 'Dima'));
   dispatch(roomsActions.add('@nameRoom'));
   dispatch(roomsActions.addUser('@nameRoom', socketId));
   dispatch(roomsActions.addGame('@nameRoom', '@gameId'));
   dispatch(gamesActions.add('@gameId'));
   dispatch(gamesActions.addUser('@gameId', socketId));

   console.log(getState().games);
   console.log();
};

export function inRoom(common, login, nameRoom) {
   const { dispatch, getState, socketId } = common;
   console.log('inRoom');
};

export function disconnect(common) {
   const { dispatch, getState, socketId } = common;

   dispatch(usersActions.remove(socketId));
   dispatch(roomsActions.removeUser(socketId));
   dispatch(gamesActions.removeUser(socketId));

   // console.log(getState());
   // console.log();
};
