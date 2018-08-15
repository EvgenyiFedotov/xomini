export const roomsTypes = {
   add: 'ROOMS_ADD',
   remove: 'ROOMS_REMOVE',
   addUser: 'ROOMS_ADD_USER',
   removeUser: 'ROOMS_REMOVE_USER',
   addGame: 'ROOMS_ADD_GAME'
};

export const roomsActions = {
   add: id => {
      return {
         type: roomsTypes.add,
         id
      };
   },
   remove: id => {
      return {
         type: roomsTypes.remove,
         id
      };
   },
   addUser: (id, userId) => {
      return {
         type: roomsTypes.addUser,
         id,
         userId
      };
   },
   removeUser: (userId, id) => {
      return {
         type: roomsTypes.removeUser,
         userId,
         id
      };
   },
   addGame: (id, gameId) => {
      return {
         type: roomsTypes.addGame,
         id,
         gameId
      };
   }
};

export const roomsHandlers = {
   add: (store, action) => {
      const { id } = action;

      if (!store[id]) {
         return {
            ...store,
            [id]: {
               users: [],
               games: []
            }
         };
      }

      return store;
   },
   remove: (store, action) => {
      const { id } = action;

      if (store[id] && !store[id].users.length) {
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
   },
   addGame: (store, action) => {
      const { id, gameId } = action;
      const games = store[id] && store[id].games;

      if (games && games.indexOf(gameId) === -1) {
         games.push(gameId);
         return { ...store };
      }

      return store;
   }
};

export default function(store = {}, action) {
   switch (action.type) {
      case roomsTypes.add:
         return roomsHandlers.add(store, action);
      case roomsTypes.remove:
         return roomsHandlers.remove(store, action);
      case roomsTypes.addUser:
         return roomsHandlers.addUser(store, action);
      case roomsTypes.removeUser:
         return roomsHandlers.removeUser(store, action);
      case roomsTypes.addGame:
         return roomsHandlers.addGame(store, action);
      default:
         return store;
   }
};
