import React from 'react';
import './Track.css'

function Track(props) {
    return (
        <div className='TrackContainer'>
            <div className='TrackInfo'>
                <h3 className='trackName'>Track Name</h3>
                <p className='trackDetails'>Artist | Album</p>
            </div>
            <button type='button'>+</button>
        </div>
    );
};

export default Track;