import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

function SearchResults(props) {
    return (
    <div className='SearchResultsContainer'>
        <div className='playlistHeader'>
        <h2>Results</h2>
        </div>
        <Tracklist button='+' title='Track' artist='Artist' album='Album'/>
    </div>);
};

export default SearchResults;