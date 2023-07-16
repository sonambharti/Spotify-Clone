import React from 'react';
import "../ComponentCss/Body.css";
import Header from "./Header";
import { useDataLayerValue } from './DataLayer';

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
        <Header spotify = {spotify}/>

        <div className="body__info">
          <img src={discover_weekly?.images[0].url} alt="" />
          <div classname="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>
        <div classname="body__songs">
          <div classname="body__icons">
            <PlayCircleFilledIcon className="body__shuffle"/>
            <FavouriteIcon fintSize="large"/>
            <MoreHorizIcon />
          </div>
          {}
        </div>
    </div>
  )
}

export default Body;