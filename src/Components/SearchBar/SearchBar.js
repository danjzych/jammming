import React from 'react';
import './SearchBar.css';
import SearchIcon from './search-icon.png'

function SearchBar() {
    return (
        <div className='SearchBarContainer'>
            <div className='SearchBar align'>
                <input placeholder='Enter your search here' className='align'/>
                <img src={SearchIcon} className='align'/>
            </div>          
        </div>
    );
};

export default SearchBar;

//<input placeholder='Enter a song title here' className=' align'/>
//<div className='align'>icon</div>