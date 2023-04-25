import React from 'react';
import './Header.css';
import adminIcon from './admin-icon.png';
import tapeIcon from './tape-icon.png';
import tapeIcon96 from './tape-icon-96.png';

function Header() {
    return (
    <div className='HeaderContainer'>
        <img src={tapeIcon} className='align'/>
        <div className='header align'>Jammming</div>
        <img src={adminIcon} className='align'/>
    </div>
    );
}

export default Header;