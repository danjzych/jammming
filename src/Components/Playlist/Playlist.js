import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';
import saveIcon from './save-icon.png';
import trashIcon from './trash-icon.png';

function Playlist(props) {

    const handleNameChange =  (event) => {
        props.onPlaylistNameChange(event.target.value);
    };

    return (
        <div className='PlaylistContainer'>
            <div className='playlistHeader'>
                <button class='noBorder' onClick={props.onSave}>
                    <img src={saveIcon} />
                </button>
                <input className='playlistInput' onChange={handleNameChange} placeholder={props.playlistName} />
                <button class='noBorder' onClick={props.onReset}>
                    <img src={trashIcon} />
                </button>
            </div>
            <Tracklist button='-' tracks={props.playlist} onTrackRemove={props.onTrackRemove}/>
        </div>);
};

export default Playlist;