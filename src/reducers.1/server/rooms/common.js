import room, { actions as roomActions } from 'reducers/common/room';

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
   return room(
      undefined,
      roomActions.addUsers(params.users)
   );
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

   if (store[id]) {
      const addUserAct = roomActions.addUser(userId);

      store[id] = room(store[id], addUserAct);

      if (addUserAct.access === false) {
         action.access = false;
      } else {
         return {
            ...store
         };
      }
   } else {
      return addUser(addRoom(store, action), action);
   }

   return store;
};

export function removeUser(store, action) {
   const { userId } = action;
   let isChange = false;
   const rooms = Object.keys(store).filter(id => {
      return store[id].users.indexOf(userId) !== -1;
   });

   action.rooms = rooms;

   rooms.filter(id => {
      isChange = true;

      store[id] = room(store[id], roomActions.removeUser(userId));

      return store[id].length === 0;
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
