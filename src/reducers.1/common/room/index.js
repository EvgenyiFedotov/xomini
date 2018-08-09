import {
   addUser,
   removeUser,
   addUsers,
   removeUsers,
   update
} from './common';

export * as actions from './actions';
export * as common from './common';

export const defaultStore = {
   users: []
};

export const types = {
   addUser: 'ROOM_ADD_USER',
   removeUser: 'ROOM_REMOVE_USER',
   addUsers: 'ROOM_ADD_USERS',
   removeUsers: 'ROOM_REMOVE_USERS',
   reset: 'ROOM_RESET',
   update: 'ROOM_UPDATE'
};

export default function(store = defaultStore, action) {
   const { type } = action;

   if (type === types.addUser) {
      return addUser(store, action);
   } else if (type === types.removeUser) {
      return removeUser(store, action);
   } else if (type === types.addUsers) {
      return addUsers(store, action);
   } else if (type === types.removeUsers) {
      return removeUsers(store, action);
   } else if (type === types.reset) {
      return { ...defaultStore };
   } else if (type === types.update) {
      return update(store, action);
   }

   return store;
};
