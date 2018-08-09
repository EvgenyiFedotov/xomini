import room, { users } from 'reducers/common/room';

export function add(store, action) {
   const { id } = action;

   if (!store[id]) {
      return {
         ...store,
         [id]: room()
      };
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

export function addUser(store, action) {
   const { id, userId } = action;

   if (store[id]) {
      return changeRoom(
         store,
         id,
         room(store[id], users.actions.add(userId))
      );
   } else {
      return addUser(add(store, action), action);
   }

   return store;
};

export function removeUser(store, action) {
   const { userId } = action;

   console.log('@removeUser');

   return store;
};

export function removeEmpty(store, action) {
   const { userId } = action;

   if (store[id] && !Object.keys(store[id].users).length) {
      delete store[id];
      return { ...store };
   }

   return store;
};

function changeRoom(store, id, roomNew) {
   if (roomNew !== store[id]) {
      return {
         ...store,
         [id]: roomNew
      };
   } else {
      action.error = true;

      return removeEmpty(store, { id });
   }
};
