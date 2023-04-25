import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

function Tracklist() {
    return (
        <div className='TracklistContainer'>
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
        </div>);
};

export default Tracklist;

//styles should be display: flex flex-direction: column to fill tracks in appropriately? 