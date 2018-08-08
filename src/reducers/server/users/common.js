export function addUser(store, action) {
   const { id } = action;

   if (!store[id]) {
      return {
         ...store,
         [id]: createUser(action.params)
      };
   }

   return store;
};

export function updateUser(store, action) {
   const { id } = action;

   if (store[id]) {
      const userOld = store[id];
      const userNew = createUser(action.params);

      return {
         ...store,
         [id]: {
            ...userOld,
            ...userNew
         }
      };
   }

   return store;
};

export function removeUser(store, action) {
   const { id } = action;

   if (store[id]) {
      action.user = store[id];

      delete store[id];

      return {
         ...store
      };
   }

   return store;
};

export function update(store, action) {
   const { users } = action;

   if (users instanceof Object) {
      return {
         ...users
      };
   }

   return store;
};

function createUser(params = {}) {
   const { login } = params;

   return {
      login
   };
};
