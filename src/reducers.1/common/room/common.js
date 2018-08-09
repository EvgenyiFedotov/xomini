export function addUser(store, action) {
   const { users } = store;
   const { userId } = action;

   if (users.indexOf(userId) === -1) {
      users.push(userId);

      return {
         ...store
      };
   } else {
      action.access = false;
   }

   return store;
};

export function removeUser(store, action) {
   const { users } = store;
   const { userId } = action;
   const userIndex = users.indexOf(userId);

   if (userIndex !== -1) {
      users.splice(userIndex, 1);

      return {
         ...store
      };
   }

   return store;
};

export function addUsers(store, action) {
   const { users } = action;

   users.forEach(userId => {
      store = addUser(store, { userId });
   });

   return store;
};

export function removeUsers(store, action) {
   const { users } = action;

   users.forEach(userId => {
      store = removeUser(store, { userId });
   });

   return store;
};

export function update(store, action) {
   const { users } = action;

   return {
      ...store,
      users
   };
};
