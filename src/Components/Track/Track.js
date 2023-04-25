import React from 'react';
import './Track.css'

function Track(props) {
    return (
        <div className='TrackContainer'>
            <h3 className='trackName'>Track Name</h3>
            <p className='trackDetails'>Artist | Album</p>
        </div>
    );
};

export default Track;