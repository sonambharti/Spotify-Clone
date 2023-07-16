import React, { useDeferredValue } from 'react';
import "../ComponentCss/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { useDataLayerValue  } from './DataLayer';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
    <div className="header">
        <div className="header__left">
            <SearchIcon />
            <input placeholder="Search for Artists, Songs, or Podcasts" type="text" />
        </div>

        <div className="header__right">
            <PersonIcon src={user?.images[0]?.url} alt="KS" />
            <h4>{user?.display_name}</h4>
        </div>
    </div>
    );
};

export default Header;