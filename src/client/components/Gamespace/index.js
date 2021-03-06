import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
   AppBar,
   Typography,
   Toolbar,
   Button,
   BottomNavigation,
   BottomNavigationAction,
   Badge
} from '@material-ui/core';
import People from '@material-ui/icons/People';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Chat from '@material-ui/icons/Chat';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideogameAsset from '@material-ui/icons/VideogameAsset';
import Game from './Content/Game';
import PlayersList from './Content/PlayersList';
import { emit } from 'reducers/socket/actions';

export class Gamespace extends Component {
   state = {
      mode: 'game'
   };

   changeValueNav = (event, value) => {
      const { dispatch } = this.props;

      if (value === 'exit') {
         dispatch(emit('rooms#removeUser'));
      } else {
         this.setState({ mode: value });
      }
   };

   render() {
      const { mode } = this.state;
      const { userConfig } = this.props;
      const usersCount = Object.keys(this.props.users).length;
      const people = <Badge badgeContent={usersCount} color="primary">
         <People />
      </Badge>;
      let content;

      if (mode === 'game') {
         content = <Game />;
      } else if (mode === 'players') {
         content = <PlayersList />;
      }

      return (
         <div className="gamespace">
            <div className="top">
               <AppBar position="static" color="default">
                  <Toolbar>
                     <Typography variant="title" color="inherit">
                        {userConfig.nameRoom}
                     </Typography>

                     <div className="login">
                        <Button size="small">
                           <AccountCircle
                              style={({ marginRight: '.5rem' })}
                              color="primary"
                           />

                           {userConfig.login}
                        </Button>
                     </div>
                  </Toolbar>
               </AppBar>
            </div>

            <div className="content">
               {content}
            </div>

            <div className="bottom-nav">
               <BottomNavigation
                  value={mode}
                  onChange={this.changeValueNav}
               >
                  <BottomNavigationAction value="game" icon={<VideogameAsset />} />
                  <BottomNavigationAction value="players" icon={people} />
                  <BottomNavigationAction value="chat" icon={<Chat />} />
                  <BottomNavigationAction value="exit" icon={<ExitToApp />} />
               </BottomNavigation>
            </div>
         </div>
      );
   };
};

export default connect(store => store)(Gamespace);
