import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className='App-playlist'>
        <SearchResults />
        <SearchResults />
      </div>
    </div>
  );
}

export default App;
