export function add(store, action) {
   const { id } = action;

   if (!store[id]) {
      return {
         ...store,
         [id]: {
            login: null
         }
      };
   } else {
      action.error = true;
   }

   return store;
};

export function remove(store, action) {
   const { id } = action;

   if (store[id]) {
      delete store[id];

      return { ...store };
   }

   return store;
};

export function login(store, action) {
   const { id, login } = action;
   const user = store[id];

   if (user) {
      user.login = login;
      return { ...store };
   }

   return store;
};
