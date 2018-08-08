import { addRoom, removeRoom, addUser, removeUser } from './common';

export * as actions from './actions';
export * as common from './common';

export const types = {
   addRoom: 'ROOMS_ADD_ROOM',
   removeRoom: 'ROOMS_REMOVE_ROOM',
   addUser: 'ROOMS_ADD_USER',
   removeUser: 'ROOMS_REMOVE_USER'
};

export default function(store = {}, action) {
   const { type } = action;

   if (type === types.addRoom) {
      return addRoom(store, action);
   } else if (type === types.removeRoom) {
      return removeRoom(store, action);
   } else if (type === types.addUser) {
      return addUser(store, action);
   } else if (type === types.removeUser) {
      return removeUser(store, action);
   }

   return store;
};
