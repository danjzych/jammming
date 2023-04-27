import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';
import saveIcon from './save-icon.png';
import trashIcon from './trash-icon.png';

function Playlist() {
    const testData = {
        song1: {
            title: 'Test Track',
            artist: 'Test Artist',
            album: 'Test Album'
        },
        song2: {
            title: 'Test Track 2',
            artist: 'Test Artist 2',
            album: 'Test Album 2'
        },
    }


    //the pseudo props in the below return statement are no longer active, just placeholders
    return (
    <div className='PlaylistContainer'>
        <div className='playlistHeader'>
            <button class='noBorder'>
                <img src={saveIcon} />
            </button>
            <h2>Playlist</h2>
            <button class='noBorder'>
                <img src={trashIcon} />
            </button>
        </div>
        <Tracklist button='-' title={testData.song1.title} artist={testData.song1.artist} album={testData.song1.album}/>
    </div>);
};

export default Playlist;