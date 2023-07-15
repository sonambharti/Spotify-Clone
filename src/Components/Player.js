import React from 'react';
import "../ComponentCss/Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function Player({ spotify }) {
  return (
    <div className="player">
        {/* <h1>Welcome to Spotifie...</h1> */}
        <div className="player_body">
            <Sidebar />
            <Body />
        </div>

        <Footer />


    </div>
  )
}

export default Player