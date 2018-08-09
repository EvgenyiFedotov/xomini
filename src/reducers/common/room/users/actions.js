import { types } from '.';

export function add(id) {
   return {
      type: types.add,
      id
   };
};

export function remove(id) {
   return {
      type: types.add,
      id
   };
};
