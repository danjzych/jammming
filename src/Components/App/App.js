import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import { useState } from 'react';

function App() {

  const [ testData, setTestData ] = useState([
    {
        id: 1,
        title: 'Test Track',
        artist: 'Test Artist',
        album: 'Test Album'
    },
    {
        id: 2,
        title: 'Test Track 2',
        artist: 'Test Artist 2',
        album: 'Test Album 2'
    },
    {
      id: 3,
      title: 'Test Track 3',
      artist: 'Test Artist 3',
      album: 'Test Album 3'
  },
  {
      id: 4,
      title: 'Test Track 4',
      artist: 'Test Artist',
      album: 'Test Album'
  },
  {
      id: 5,
      title: 'Test Track 5',
      artist: 'Test Artist 2',
      album: 'Test Album 2'
  },
  {
    id: 6,
    title: 'Test Track 6',
    artist: 'Test Artist 3',
    album: 'Test Album 3'
  },
  {
    id: 7,
    title: 'Test Track 7',
    artist: 'Test Artist',
    album: 'Test Album'
  },
  {
    id: 8,
    title: 'Test Track 8',
    artist: 'Test Artist 2',
    album: 'Test Album 2'
  },
  {
  id: 9,
  title: 'Test Track 9',
  artist: 'Test Artist 3',
  album: 'Test Album 3'
  },
  {
    id: 10,
    title: 'Test Track 10',
    artist: 'Test Artist 3',
    album: 'Test Album 3'
    },
    {
      id: 11,
      title: 'Test Track 11',
      artist: 'Test Artist 3',
      album: 'Test Album 3'
      },
  ]);
  const [ playlist, setPlaylist ] = useState(
        [{
        id: 12,
        title: 'Test Track 0',
        artist: 'Test Artist',
        album: 'Test Album'
        },
       {
        id: 13,
        title: 'Test Track 00',
        artist: 'Test Artist 2',
        album: 'Test Album 2'
        },]
  );
  const [playlistName, setPlaylistName] = useState('name your playlist...');
    
    const handleAdd = (props) => {
      alert('itworked');
      //if track is not already in playlist.tracks, add to playlist.tracks
        //verify by using id
        //if already in playlist.tracks, alert "this track is already in your playlist"
    }


    const handleRemove = (track) => {
      setPlaylist((tracks) => {tracks.filter((currentTrack) => currentTrack.id !== track.id)})
      //this is removing both tracks - why?
    };

    const updatePlaylistName = (name) => {
      setPlaylistName(name)
    }

  return (
    <div className='App-Container'>
      <Header />
      <SearchBar />
      <div className='App-playlist'>
        <SearchResults testData={testData} handleAdd={handleAdd}/>
        <Playlist playlistName={playlistName}
          playlist={playlist}
          handleRemove={handleRemove}
          onPlaylistNameChange={updatePlaylistName}
        />
      </div>
      <footer>
        <div className='align'>
        Made By Daniel Zych as part of CodeCademy Front-End Development Course :)
        </div>
      </footer>
    </div>
  );
}

export default App;
