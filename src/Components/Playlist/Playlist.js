import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';
import saveIcon from './save-icon.png';
import trashIcon from './trash-icon.png';

function Playlist(props) {

    return (
    <div className='PlaylistContainer'>
        <div className='playlistHeader'>
            <button class='noBorder'>
                <img src={saveIcon} />
            </button>
            <h2>{props.playlistName}</h2>
            <button class='noBorder'>
                <img src={trashIcon} />
            </button>
        </div>
        <Tracklist button='-' testData={props.playlist} handleRemove={props.handleRemove}/>
    </div>);
};

export default Playlist;