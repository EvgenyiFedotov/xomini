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
         room(store[id], users.actions.add(userId)),
         action
      );
   } else {
      return addUser(add(store, action), action);
   }

   return store;
};

export function removeUser(store, action) {
   const { userId } = action;

   Object.keys(store).forEach(id => {
      store = changeRoom(
         store,
         id,
         room(store[id], users.actions.remove(userId)),
         action
      );
   });

   return store;
};

export function removeEmpty(store, action) {
   const { id } = action;

   if (store[id] && !Object.keys(store[id].users).length) {
      delete store[id];
      return { ...store };
   }

   return store;
};

function changeRoom(store, id, roomNew, action) {
   if (roomNew !== store[id]) {
      if (Object.keys(roomNew.users).length) {
         return {
            ...store,
            [id]: roomNew
         };
      } else {
         delete store[id];
         return { ...store };
      }
   } else {
      action.error = true;
   }

   return store;
};
