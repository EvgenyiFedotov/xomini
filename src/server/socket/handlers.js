import { usersActions } from 'reducers/server/users';
import { roomsActions } from 'reducers/server';

export function connection(common) {
   const { dispatch, getState, socketId } = common;

   dispatch(usersActions.add(socketId));
   dispatch(usersActions.remove(socketId));

   console.log(getState());

   dispatch(usersActions.add(socketId));
   dispatch(usersActions.login(socketId, 'Dima'));
   dispatch(roomsActions.add())

   console.log(getState());
};

export function inRoom(common, login, nameRoom) {
   const { dispatch, getState, socketId } = common;
};
