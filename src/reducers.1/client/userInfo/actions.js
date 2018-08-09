import { types } from '.';

export function login(login = null) {
   return {
      type: types.login,
      login
   };
};

export function room(room = null) {
   return {
      type: types.room,
      room
   };
};

export function reset() {
   return {
      type: types.reset
   };
};
