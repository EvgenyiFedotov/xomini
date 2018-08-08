import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from '@material-ui/core';
import { emit, once } from 'reducers/client/socket/actions';

export class Signin extends Component {
   values = {
      nameRoom: '',
      login: '',
   };

   state = {
      isValidError: false
   };

   changeText = name => ev => {
      this.values[name] = ev.target.value.trim();

      if (this.state.isValidError) {
         this.setState({ isValidError: false });
      }
   };

   signin = () => {
      let { dispatch } = this.props;
      let { login, nameRoom } = this.values;

      if (nameRoom && nameRoom !== '' && login && login !== '') {
         dispatch(once('inRoom:result', result => {
            console.log('@result', result);

            if (result === false) {
               this.setState({ isValidError: true });
            }
         }));

         dispatch(emit('inRoom', login, nameRoom));
      } else {
         this.setState({ isValidError: true });
      }
   };

   render() {
      const { isValidError } = this.state;
      const { nameRoom, login } = this.values;

      return (
         <div className="form-signin">
            <Input
               placeholder="Name room"
               defaultValue={nameRoom}
               onChange={this.changeText('nameRoom')}
               error={isValidError}
            />

            <Input
               placeholder="Login"
               defaultValue={login}
               onChange={this.changeText('login')}
               error={isValidError}
            />

            <Button
               variant="contained"
               size="small"
               color="primary"
               onClick={this.signin}
            >
               Sign in
            </Button>
         </div>
      );
   };
};

export default connect()(Signin);
