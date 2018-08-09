import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
   List,
   ListItem
} from '@material-ui/core';

export class PlayersList extends Component {
   render() {
      const { room } = this.props;
      const users = room ? room.users : [];

      return (
         <div className="players-list">
            <List>{
               users.map((login, index) => {
                  return <ListItem key={index} button>{login}</ListItem>;
               })
            }</List>
         </div>
      );
   };
};

export default connect(store => store)(PlayersList);
