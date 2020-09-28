import React from 'react';
import './Header.scss';
import SearchBar from '../SearchBar';

function Header({ openModal }) {
  return (
    <header className='header'>
      <a href='/'>
        <h1>
          Anime<span className='light-blue'>Sort</span>
        </h1>
      </a>
      <SearchBar className='search-form' />
      {/* <button className='btn' onClick={openModal}>
        Login
      </button> */}
      <span></span>
    </header>
  );
}

export default Header;
