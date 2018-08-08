import { types } from '.';

export function addUser(id, params = {}) {
   return {
      type: types.addUser,
      id,
      params
   };
};

export function updateUser(id, params = {}) {
   return {
      type: types.updateUser,
      id,
      params
   };
};

export function removeUser(id) {
   return {
      type: types.removeUser,
      id
   };
};

export function update(users = {}) {
   return {
      type: types.update,
      users
   };
};
