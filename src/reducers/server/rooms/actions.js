import { types } from '.';

export function add(id) {
   return {
      type: types.add,
      id
   };
};

export function remove(id) {
   return {
      type: types.remove,
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
