import React from 'react';
import "../ComponentCss/Player.css";
import Sidebar from './Sidebar';
import Body from './Body';

function Player({ spotify }) {
  return (
    <div className="player">
        <h1>Welcome to Spotifie...</h1>
        <div className="player_body">
            <Sidebar />
            <Body />

        </div>


    </div>
  )
}

export default Player