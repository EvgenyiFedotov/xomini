import io from 'socket.io';
import namespace from '../namespace';
import { createStore } from 'redux';
import { server as reducerServer } from 'reducers';
import * as handlers from './handlers';

export default function(httpServer) {
   const server = new io(httpServer, {
      serveClient: false,
      wsEngine: 'ws'
   });
   const store = createStore(reducerServer);

   namespace(server, handlers, {
      store
   });
};