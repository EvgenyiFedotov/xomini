import { types } from '.';

export function addRoom(id, params = {}) {
   return {
      type: types.addRoom,
      id,
      params
   };
};

export function removeRoom(id) {
   return {
      type: types.removeRoom,
      id
   };
};

export function addUser(id, userId) {
   return {
      type: types.addUser,
      id,
      userId
   };
};

export function removeUser(userId) {
   return {
      type: types.removeUser,
      userId
   };
};
