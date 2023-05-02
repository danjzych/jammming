import React from 'react';
import './Track.css'

function Track(props) {

    const handleClick = (event) => {
        if (props.button === '+') {
            props.onTrackAdd(props)
        } else {
            props.onTrackRemove(props);
        }}

    return (
        <div className='TrackContainer'>
            <div className='TrackInfo'>
                <h3 className='trackName'>{props.title}</h3>
                <p className='trackDetails'>{props.artist} | {props.album}</p>
            </div>
            <button type='button' onClick={() => handleClick(props)}>{props.button}</button>
        </div>
    );
};

export default Track;