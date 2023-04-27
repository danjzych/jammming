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
      title: 'Test Track',
      artist: 'Test Artist',
      album: 'Test Album'
  },
  {
      id: 5,
      title: 'Test Track 2',
      artist: 'Test Artist 2',
      album: 'Test Album 2'
  },
  {
    id: 6,
    title: 'Test Track 3',
    artist: 'Test Artist 3',
    album: 'Test Album 3'
  },
  {
    id: 7,
    title: 'Test Track',
    artist: 'Test Artist',
    album: 'Test Album'
  },
  {
    id: 8,
    title: 'Test Track 2',
    artist: 'Test Artist 2',
    album: 'Test Album 2'
  },
  {
  id: 9,
  title: 'Test Track 3',
  artist: 'Test Artist 3',
  album: 'Test Album 3'
  },
  {
    id: 10,
    title: 'Test Track 3',
    artist: 'Test Artist 3',
    album: 'Test Album 3'
    },
    {
      id: 11,
      title: 'Test Track 3',
      artist: 'Test Artist 3',
      album: 'Test Album 3'
      },
  ]);
  const [ playlist, setPlaylist ] = useState(
    {
      name: 'name your playlist...',
      tracks: [{
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
        },]
    }
  );
 
  return (
    <div className='App-Container'>
      <Header />
      <SearchBar />
      <div className='App-playlist'>
        <SearchResults testData={testData} />
        <Playlist playlist={playlist} />
      </div>
      <footer>
        <div className='align'>
        Made By Daniel Zych as part of CodeCademy Front-tse Development Course :)
        </div>
      </footer>
    </div>
  );
}

export default App;
