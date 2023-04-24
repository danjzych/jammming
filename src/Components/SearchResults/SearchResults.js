import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

function SearchResults() {
    return (
    <div>
        <h2>results</h2>
            <div className='results'>
            <Tracklist />
            </div>
    </div>);
};

export default SearchResults;