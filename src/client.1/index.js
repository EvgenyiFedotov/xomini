import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore } from 'redux';
import { gameReducers } from '../reducers';
import { Provider } from 'react-redux';

import HtmlStyle from './components/Html/Html.less';
import AppStyle from './components/App/App.less';
import PlayerInStyle from './components/PlayerIn/PlayerIn.less';
import GamespaceStyle from './components/Gamespace/Style.less';

let initialData = document.getElementById('initial-data').getAttribute('data-json');
initialData = typeof initialData === 'string' ? JSON.parse(initialData) : {};

const store = createStore(gameReducers, initialData.store);

ReactDOM.hydrate((
   <Provider store={store}>
      <App />
   </Provider>
), document.getElementById('root'));