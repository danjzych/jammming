import React from 'react';
import './SearchBar.css';
import SearchIcon from './search-icon.png';
import { useState } from 'react';

function SearchBar(props) {

    const [ term, setTerm ] = useState('');

    const handleTermChange = (e) => {
        setTerm(e.target.value);
    };

    const handleSearch = () => {
        props.onSearch(term)
    };

    return (
        <div className='SearchBarContainer'>
            <div className='SearchBar align'>
                <input placeholder='Enter your search here' className='align' onChange={handleTermChange}/>
                <button id='searchButton' onClick={handleSearch}><img src={SearchIcon} className='align'/></button>
            </div>          
        </div>
    );
};

export default SearchBar;

//<input placeholder='Enter a song title here' className=' align'/>
//<div className='align'>icon</div>