import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gamespace from '../Gamespace';
import Signin from '../Forms/SignIn';
import * as socket from 'client/common/Socket';
import { add, on } from 'reducers/client/socket/actions';

export class App extends Component {
   componentDidMount() {
      const { dispatch } = this.props;
      const action = add(socket.create());

      dispatch(action);

      dispatch(on(
         'actions', (...actions) => {
            actions.forEach(action => {
               dispatch(action);
            });
         }
      ));
   };

   render() {
      const { userInfo } = this.props;
      let content;

      if (userInfo && userInfo.login && userInfo.room) {
         content = <Gamespace />;
      } else {
         content = <Signin />;
      }

      return (
         <div className="app">
            <div className="content">{content}</div>
         </div>
      );
   };
};

export default connect(store => store)(App);
