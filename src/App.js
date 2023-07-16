import React,  { useEffect } from "react";
import Login from "./Components/Login";
import { getTokenFromUrl } from './Components/spotify';
import Player from "./Components/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./Components/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
    // const [ token, setToken] = useState(null);
    const [{ user, token }, dispatch] = useDataLayerValue();
    // Here user is same as dataLayer.user

    useEffect(() => {
        const hash = getTokenFromUrl();
        const _token = hash.access_token;
        window.location.hash= "";

        // console.log("Token : ", _token);
        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                token: _token,
            });
            // setToken(_token);

            // giving token to spotify api to connect with react
            spotify.setAccessToken(_token);
            //get the users account from the spotify
            spotify.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    user: user,
                });
            });
            
            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists,
                });  
            });

            spotify.getPlaylist('37i9dQZEVXcQ9COmYvdajy').then(response => dispatch({
                type: "SET_DISCOVER_WEEKLY",
                discover_weekly: response,
            })
            );
        }

        // console.log("Token: ", token);
    },  []);

    // console.log('🙍‍♂️', user);
    // console.log('🎰', token);

    return ( 
    <div className = "App">
        {
            token ? <Player spotify={spotify} /> : <Login />
        }
    </div>
    );
}

export default App;