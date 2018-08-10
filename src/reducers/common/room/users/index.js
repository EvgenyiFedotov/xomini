import * as handlers from './handlers';

export * as actions from './actions';
export * as handlers from './handlers';

export const types = {
   add: 'USERS_ADD',
   remove: 'USERS_REMOVE'
};

export default function(store = {}, action) {
   if (action) {
      const { type } = action;

      if (type === types.add) {
         return handlers.add(store, action);
      } else if (type === types.remove) {
         return handlers.remove(store, action);
      }
   }

   return store;
};