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
            <button class='noBorder'>
                <img src={saveIcon} />
            </button>
            <input className='playlistInput' onChange={handleNameChange} defaultValue='name your playlist...'/>
            <button class='noBorder'>
                <img src={trashIcon} />
            </button>
        </div>
        <Tracklist button='-' testData={props.playlist} onTrackRemove={props.onTrackRemove}/>
    </div>);
};

export default Playlist;

//<h2>{props.playlistName}</h2>