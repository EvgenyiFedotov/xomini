import io from 'socket.io';
import namespace from '../namespace';
import { createStore } from 'redux';
import * as reducers from 'reducers';
import * as handlers from './handlers';

export default function(httpServer) {
   const server = new io(httpServer, {
      serveClient: false,
      wsEngine: 'ws'
   });
   const store = createStore(reducers.server);

   namespace(server, handlers, {
      store
   });
};