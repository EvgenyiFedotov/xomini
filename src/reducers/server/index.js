import { combineReducers } from 'redux';
import users from './users';

export const roomsTypes = {
   add: 'ROOMS_ADD',
   remove: 'ROOMS_REMOVE'
};

export const roomsActions = {
   add: id => {
      return {
         type: roomsTypes.add,
         id
      };
   },
   remove: id => {
      return {
         type: roomsTypes.remove,
         id
      };
   }
};

export const roomsHandlers = {
   add: (store, action) => {
      

      return store;
   },
   remove: (store, action) => {
      return store;
   }
};

export default combineReducers({
   users,
   rooms: function(store = {}, action) {
      switch (action.type) {
         case roomsTypes.add: return roomsHandlers.add(store, action);
         case roomsTypes.remove: return roomsHandlers.remove(store, action);
         default: return store;
      }
   }
});