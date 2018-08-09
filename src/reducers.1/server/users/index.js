import { addUser, updateUser, removeUser, update } from './common';

export const types = {
   addUser: 'USERS_ADD_USER',
   updateUser: 'USERS_UPDATE_USER',
   removeUser: 'USERS_REMOVE_USER',
   update: 'USERS_UPDATE'
};

export * as actions from './actions';
export * as common from './common';

export default function(store = {}, action) {
   const { type } = action;

   if (type === types.addUser) {
      return addUser(store, action);
   } else if (type === types.updateUser) {
      return updateUser(store, action);
   } else if (type === types.removeUser) {
      return removeUser(store, action);
   } else if (type === types.update) {
      return update(store, action);
   }

   return store;
};
