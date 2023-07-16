import React from 'react'
import "../ComponentCss/Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';


function Footer() {
  return (
    <div className="footer">
        
        <div className="footer_left">
          <img className='footer_albumLogo' src="" alt="" />
          <div className='footer_songInfo'>
            <h4>Yohooooo!</h4>
            <p>User</p>
          </div>
        </div>
        
        <div className="footer_center">
          <ShuffleIcon className='footer_green' />
          <SkipPreviousIcon className='footer_icon' />
          <PlayCircleOutlineIcon fontSize="large" className='footer_icon' />
          <SkipNextIcon className='footer_icon' />
          <RepeatIcon className='footer_green' />
        </div>
        
        <div className="footer_right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>

            <Grid item>
              <VolumeDownIcon />
            </Grid>

            <Grid item xs>
              <Slider aria-labellebdy="continuous-slider" />
            </Grid>
          </Grid>
        </div>

    </div>
  )
}

export default Footer