export function add(store, action) {
   const { id } = action;

   if (!store[id]) {
      return {
         ...store,
         [id]: {}
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
