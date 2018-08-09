import {  types } from '.';

export function addUser(userId) {
   return {
      type: types.addUser,
      userId
   };
};

export function removeUser(userId) {
   return {
      type: types.removeUser,
      userId
   };
};

export function addUsers(users = []) {
   return {
      type: types.addUsers,
      users
   };
};

export function removeUsers(users = []) {
   return {
      type: types.removeUsers,
      users
   };
};

export function update(params = {}) {
   const { users } = params;

   return {
      type: types.update,
      users
   };
};

export function reset() {
   return {
      type: types.reset
   };
};
