import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';

function App() {
  return (
    <div className='App-Container'>
      <Header />
      <SearchBar />
      <div className='App-playlist'>
        <SearchResults />
        <Playlist />
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
