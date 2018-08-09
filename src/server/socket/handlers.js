import * as usersActs from 'reducers/server/users/actions';
import * as roomsActs from 'reducers/server/rooms/actions';
import * as userInforActs from 'reducers/client/userInfo/actions';
import * as roomActs from 'reducers/common/room/actions';

export function connection(common) {
   const { dispatch, socketId } = common;

   dispatch(usersActs.addUser(socketId));
};

export function inRoom(common, login, nameRoom) {
   const { dispatch, socket, socketEmit, namespaceEmit, getState } = common;
   const roomAddUser = roomsActs.addUser(nameRoom, login);

   dispatch(roomAddUser);

   if (roomAddUser.access !== false) {
      socket.join(nameRoom);

      dispatch(usersActs.updateUser(socket.id, {
         login
      }));

      socketEmit([
         userInforActs.login(login),
         userInforActs.room(nameRoom)
      ]);

      roomUpdate(namespaceEmit, getState(), nameRoom);
   }

   return {
      result: roomAddUser.access
   };
};

export function disconnecting(common) {
   const { dispatch, socketId, namespaceEmit, getState } = common;
   let removeUserAct = usersActs.removeUser(socketId);

   dispatch(removeUserAct);

   const { login } = removeUserAct.user || {};

   if (login) {
      const removeUserAct = roomsActs.removeUser(login);

      dispatch(removeUserAct);

      if (removeUserAct.rooms && removeUserAct.rooms.length) {
         const state = getState()

         removeUserAct.rooms.forEach(nameRoom => {
            roomUpdate(namespaceEmit, state, nameRoom);
         });
      }
   }
};

function roomUpdate(namespaceEmit, state, nameRoom) {
   namespaceEmit([
      roomActs.update(
         state.rooms[nameRoom]
      )
   ], [nameRoom]);
};
