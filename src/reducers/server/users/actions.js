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

export function login(id, login) {
   return {
      type: types.login,
      id,
      login
   };
};
