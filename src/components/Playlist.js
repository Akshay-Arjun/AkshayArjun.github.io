import { Fullscreen } from '@material-ui/icons';
import React from 'react';
import Spotify from 'react-spotify-embed';


const Playlist = (props) => {
return (
  <>
  <h3> Note : If the selected song doesn't play, click on pause button and then play button.</h3>
  <h3>Mass Hits :</h3>
  <Spotify link="https://open.spotify.com/playlist/6CzljxkeQwpRyg08wRGMJb" width={"95%"} frameBorder={10}  />
  <h3>Love Hits :</h3>
  <Spotify link="https://open.spotify.com/playlist/3p2tAkOvJqOPYjttRxEQD5" width={"95%"} frameBorder={10}  />
  </>
  )
};

export default Playlist;