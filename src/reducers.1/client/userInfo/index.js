export * as actions from './actions';

export const types = {
   login: 'USERINFO_LOGIN',
   room: 'USERINFO_ROOM',
   reset: 'USERINFO_RESET'
};

export const defaultStore = {
   login: null,
   room: null
};

export default function(store = {}, action) {
   const { type } = action;

   if (type === types.login) {
      return {
         ...store,
         login: action.login
      };
   } else if (type === types.room) {
      return {
         ...store,
         room: action.room
      };
   } else if (type === types.reset) {
      return {
         ...defaultStore
      };
   }

   return store;
};
