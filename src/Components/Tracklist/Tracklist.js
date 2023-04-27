import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

function Tracklist(props) {

  const testData = [
    {
        title: 'Test Track',
        artist: 'Test Artist',
        album: 'Test Album'
    },
    {
        title: 'Test Track 2',
        artist: 'Test Artist 2',
        album: 'Test Album 2'
    },
    {
      title: 'Test Track 3',
      artist: 'Test Artist 3',
      album: 'Test Album 3'
  },
  {
      title: 'Test Track',
      artist: 'Test Artist',
      album: 'Test Album'
  },
  {
      title: 'Test Track 2',
      artist: 'Test Artist 2',
      album: 'Test Album 2'
  },
  {
    title: 'Test Track 3',
    artist: 'Test Artist 3',
    album: 'Test Album 3'
  },
  {
    title: 'Test Track',
    artist: 'Test Artist',
    album: 'Test Album'
  },
  {
    title: 'Test Track 2',
    artist: 'Test Artist 2',
    album: 'Test Album 2'
  },
  {
  title: 'Test Track 3',
  artist: 'Test Artist 3',
  album: 'Test Album 3'
  },
]

  return (
       <div className='TracklistContainer'>
        {testData.map((track) => {
          return (
             <Track button={props.button} title={track.title} artist={track.artist} album={track.album}/>
          )
        })}
      </div>);
};

export default Tracklist;