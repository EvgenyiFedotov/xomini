import io from 'socket.io';
import namespace from './namespace';
import { createStore } from 'redux';
import * as reducers from 'reducers';
import * as usersActs from 'reducers/server/users/actions';
import * as roomsActs from 'reducers/server/rooms/actions';

export default function(httpServer) {
   const server = new io(httpServer, {
      serveClient: false,
      wsEngine: 'ws'
   });
   const store = createStore(reducers.server);

   namespace(server, {
      'connection': (common) => {
         const { dispatch, socketId } = common;

         dispatch(usersActs.addUser(
            socketId
         ));
      },
      'inRoom': (common, login, nameRoom) => {
         const { dispatch, socketId } = common;
         const roomAddUser = roomsActs.addUser(nameRoom, login);

         dispatch(roomAddUser);

         if (roomAddUser.access !== false) {
            dispatch(usersActs.updateUser(socketId, {
               login
            }));
         }

         return {
            result: roomAddUser.access
         };
      },
      'disconnecting': (common) => {
         const { dispatch, socketId } = common;
         const removeUserAct = usersActs.removeUser(socketId);

         dispatch(removeUserAct);

         const { login } = removeUserAct.user || {};

         if (login) {
            dispatch(roomsActs.removeUser(login));
         }
      }
   }, {
      store
   });
};
