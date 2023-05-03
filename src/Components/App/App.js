import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import { useState } from 'react';
import Spotify from "../../util/Spotify";

function App() {

  const [ searchResults, setSearchResults ] = useState([]);
  const [ playlist, setPlaylist ] = useState([]);
  const [playlistName, setPlaylistName] = useState('name your playlist...');

  const searchSpotify = (term) => {
    Spotify.search(term).then(setSearchResults)
  };
    
  const addTrack = (track) => {
    if (playlist === undefined) {
      setPlaylist([track])
    } else if (playlist.some((savedTrack) => savedTrack.id === track.id)) {
      alert('this track is already in your playlist')
    } else {
      setPlaylist((prevTracks) => [...prevTracks, track]);
    };
      //maybe grey out track after it has been added?
  }

  const removeTrack = (track) => {
    setPlaylist(prevPlaylist => prevPlaylist.filter((removedTrack) => removedTrack.id !== track.id))
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name)
  }

  const resetPlaylist = () => {
    setPlaylist([]);
  };

  const savePlaylist = () => {
    const trackUris = playlist.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris)
    alert(`Your playlist '${playlistName}' has been saved to Spotify!`);
    setPlaylist([]);
    setPlaylistName('name your playlist...');
  };

  return (
    <div className='App-Container'>
      <Header />
      <SearchBar onSearch={searchSpotify}/>
      <div className='App-playlist'>
        <SearchResults searchResults={searchResults} onTrackAdd={addTrack}/>
        <Playlist playlistName={playlistName}
          playlist={playlist}
          onTrackRemove={removeTrack}
          onPlaylistNameChange={updatePlaylistName}
          onSave={savePlaylist}
          onReset={resetPlaylist}
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

/*{
        id: 1,
        title: 'Test Track',
        artist: 'Test Artist',
        album: 'Test Album',
        uri: '1eheathethaehbe'
    },
    {
        id: 2,
        title: 'Test Track 2',
        artist: 'Test Artist 2',
        album: 'Test Album 2',
        uri: '2eheathethaehbe'
    },
    {
      id: 3,
      title: 'Test Track 3',
      artist: 'Test Artist 3',
      album: 'Test Album 3',
      uri: '3eheathethaehbe'
  },
  {
      id: 4,
      title: 'Test Track 4',
      artist: 'Test Artist',
      album: 'Test Album',
      uri: '4eheathethaehbe'
  },
  {
      id: 5,
      title: 'Test Track 5',
      artist: 'Test Artist 2',
      album: 'Test Album 2',
      uri: '5eheathethaehbe'
  },
  {
    id: 6,
    title: 'Test Track 6',
    artist: 'Test Artist 3',
    album: 'Test Album 3',
    uri: '6eheathethaehbe'
  },
  {
    id: 7,
    title: 'Test Track 7',
    artist: 'Test Artist',
    album: 'Test Album',
    uri: '7eheathethaehbe'
  },
  {
    id: 8,
    title: 'Test Track 8',
    artist: 'Test Artist 2',
    album: 'Test Album 2',
    uri: '8eheathethaehbe'
  },
  {
    id: 9,
    title: 'Test Track 9',
    artist: 'Test Artist 3',
    album: 'Test Album 3',
    uri: '9eheathethaehbe'
  },
  {
    id: 10,
    title: 'Test Track 10',
    artist: 'Test Artist 3',
    album: 'Test Album 3',
    uri: '10eheathethaehbe'
  },
    {
      id: 11,
      title: 'Test Track 11',
      artist: 'Test Artist 3',
      album: 'Test Album 3',
      uri: '11eheathethaehbe'
      },*/