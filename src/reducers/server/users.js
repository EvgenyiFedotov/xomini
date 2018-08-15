export const usersTypes = {
   add: 'USERS_ADD',
   remove: 'USERS_REMOVE',
   login: 'USERS_LOGIN'
};

export const usersActions = {
   add: id => {
      return {
         type: usersTypes.add,
         id
      };
   },
   remove: id => {
      return {
         type: usersTypes.remove,
         id
      };
   },
   login: (id, login) => {
      return {
         type: usersTypes.login,
         id,
         login
      };
   }
};

export const usersHandlers = {
   add: (store, action) => {
      const { id } = action;

      if (!store[id]) {
         return {
            ...store,
            [id]: {
               login: null
            }
         };
      }

      return store;
   },
   remove: (store, action) => {
      const { id } = action;

      if (store[id]) {
         delete store[id];
         return { ...store };
      }

      return store;
   },
   login: (store, action) => {
      const { id, login } = action;
      const user = store[id];

      if (user) {
         return {
            ...store,
            [id]: {
               ...user,
               login
            }
         };
      }

      return store;
   }
};

export default function(store = {}, action) {
   switch (action.type) {
      case usersTypes.add:
         return usersHandlers.add(store, action);
      case usersTypes.remove:
         return usersHandlers.remove(store, action);
      case usersTypes.login:
         return usersHandlers.login(store, action);
      default:
         return store;
   }
};
