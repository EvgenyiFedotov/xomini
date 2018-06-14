import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';

import Html from '../client/components/Html/Html';
import App from '../client/components/App/App';

const PORT = 3000;
const app = express();

app.use(express.static(__dirname + '/../client'));

app.get('/*', function(req, res) {
   const initialData = {
      name: '123123'
   };
   const htmlParams = {
      content: <App {...initialData}/>,
      initialData: initialData
   };

   const result = ReactDom.renderToString(<Html {...htmlParams}/>);

   return res.send(result);
});

app.listen(PORT, function() {
   console.log(`Example app listening on port ${PORT}!`);
});
