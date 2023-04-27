import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

function SearchResults() {
    return (
    <div className='SearchResultsContainer'>
        <h2>Results</h2>
        <Tracklist />
    </div>);
};

export default SearchResults;