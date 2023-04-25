import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

function Playlist() {
    return (
    <div className='PlaylistContainer'>
        <h2>Playlist</h2>
            <div className='Playlist'>
            <Tracklist />
            </div>
    </div>);
};

export default Playlist;