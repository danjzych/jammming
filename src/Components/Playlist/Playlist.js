import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

function Playlist() {
    return (
    <div className='PlaylistContainer'>
        <h2>Playlist</h2>
        <Tracklist />
    </div>);
};

export default Playlist;