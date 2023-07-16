import React from 'react';
import '../ComponentCss/Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';


function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />

      <SidebarOption title="Home" Icon={HomeIcon}/>
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar_title"> PLAYLISTS</strong>
      <hr/>
{console.log(playlists)}
      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))}
      {/* <SidebarOption title="Hindi Bollywood" />
      <SidebarOption title="Bollywood Party Songs" />
      <SidebarOption title="English Songs" /> */}
    </div>
  );
}

export default Sidebar;