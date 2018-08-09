import * as handlers from './handlers';

export * as actions from './actions';
export * as handlers from './handlers';

export const types = {
   add: 'ROOMS_ADD',
   remove: 'ROOMS_REMOVE',
   addUser: 'ROOMS_ADD_USER',
   removeUser: 'ROOMS_REMOVE_USER'
};

export default function(store = {}, action) {
   const { type } = action;

   if (type === types.add) {
      return handlers.add(store, action);
   } else if (type === types.remove) {
      return handlers.remove(store, action);
   } else if (type === types.addUser) {
      return handlers.addUser(store, action);
   } else if (type === types.removeUser) {
      return handlers.removeUser(store, action);
   }

   return store;
};