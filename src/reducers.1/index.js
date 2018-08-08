import { combineReducers } from 'redux';

const lock = (store = {}, action) => {
   return store;
};

export const client = combineReducers({
   lock
});

export const server = combineReducers({
   lock
});
