import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

function Tracklist(props) {

  return (
       <div className='TracklistContainer'>
        {props.tracks?.map((track) => {
          return (
             <Track button={props.button}
              id={track.id}
              key={track.id + track.title}
              uri={track.uri}
              name={track.name}
              artist={track.artist}
              album={track.album}
              onTrackAdd={props.onTrackAdd}
              onTrackRemove={props.onTrackRemove}
             />
          )
        })}
      </div>);
};

export default Tracklist;