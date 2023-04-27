import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

function Tracklist(props) {

  return (
       <div className='TracklistContainer'>
        {props.testData?.map((track) => {
          return (
             <Track button={props.button} key={track.id} title={track.title} artist={track.artist} album={track.album}/>
          )
        })}
      </div>);
};

export default Tracklist;