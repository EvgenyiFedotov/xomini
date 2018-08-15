export const gamesTypes = {
   add: 'GAMES_ADD',
   remove: 'GAMES_REMOVE',
   addUser: 'GAMES_ADD_USER',
   removeUser: 'GAMES_REMOVE_USER'
};

export const gamesActions = {
   add: id => {
      return {
         type: gamesTypes.add,
         id
      };
   },
   remove: id => {
      return {
         type: gamesTypes.remove,
         id
      };
   },
   addUser: (id, userId) => {
      return {
         type: gamesTypes.addUser,
         id,
         userId
      };
   },
   removeUser: (userId, id) => {
      return {
         type: gamesTypes.removeUser,
         userId,
         id
      };
   }
};

export const gamesHandlers = {
   add: (store, action) => {
      const { id } = action;

      if (!store[id]) {
         return {
            ...store,
            [id]: {
               users: []
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
   addUser: (store, action) => {
      const { id, userId } = action;
      const users = store[id] && store[id].users;

      if (users && users.indexOf(userId) === -1) {
         users.push(userId);
         return { ...store };
      }

      return store;
   },
   removeUser: (store, action) => {
      const { id, userId } = action;

      if (id) {
         const users = store[id] && store[id].users;

         if (users) {
            const index = users.indexOf(userId);

            if (index !== -1) {
               users.splice(index, 1);
               return { ...store };
            }
         }
      } else {
         const newStore = {};

         Object.keys(store).forEach(id => {
            const users = store[id].users;
            const index = users.indexOf(userId);

            if (index !== -1) {
               users.splice(index, 1);
            }

            if (users.length) {
               newStore[id] = store[id];
            }
         });

         return { ...newStore };
      }

      return store;
   }
};

export default function(store = {}, action) {
   switch (action.type) {
      case gamesTypes.add:
         return gamesHandlers.add(store, action);
      case gamesTypes.remove:
         return gamesHandlers.remove(store, action);
      case gamesTypes.addUser:
         return gamesHandlers.addUser(store, action);
      case gamesTypes.removeUser:
         return gamesHandlers.removeUser(store, action);
      default:
         return store;
   }
};
