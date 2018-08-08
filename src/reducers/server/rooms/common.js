export function addRoom(store, action) {
   const { id } = action;

   if (!store[id]) {
      return {
         ...store,
         [id]: createRoom(action.params)
      };
   }

   return store;
};

export function createRoom(params = {}) {
   let { users } = params;

   users = users instanceof Array ? users : [];

   return {
      users
   };
};

export function removeRoom(store, action) {
   const { id } = action;

   if (store[id]) {
      delete store[id];

      return {
         ...store
      };
   }

   return store;
};

export function addUser(store, action) {
   const { id, userId } = action;
   const room = store[id];

   if (room) {
      const { users } = room;

      if (users && users.indexOf(userId) === -1) {
         users.push(userId);

         return {
            ...store
         };
      } else {
         action.access = false;
      }
   } else {
      return addUser(addRoom(store, action), action);
   }

   return store;
};

export function removeUser(store, action) {
   const { userId } = action;
   let isChange = false;

   Object.keys(store).filter(id => {
      return store[id].users.indexOf(userId) !== -1;
   }).filter(id => {
      const { users } = store[id];
      const userIndex = users.indexOf(userId);

      isChange = true;

      if (userIndex !== -1) {
         users.splice(userIndex, 1);
      }

      return users.length === 0;
   }).forEach(id => {
      removeRoom(store, { id });
   });

   if (isChange) {
      return {
         ...store
      };
   }

   return store;
};
