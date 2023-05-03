import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

function SearchResults(props) {

    return (
    <div className='SearchResultsContainer'>
        <div className='playlistHeader'>
        <h2>Results</h2>
        </div>
        <Tracklist button='+' tracks={props.searchResults} onTrackAdd={props.onTrackAdd}/>
    </div>);
};

export default SearchResults;