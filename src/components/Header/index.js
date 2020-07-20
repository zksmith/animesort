import React from 'react';
import './Header.scss';
import SearchBar from '../SearchBar';

function Header() {
  return (
    <header className='header'>
      <a href='#!'>
        <h1>
          Anime<span className='light-blue'>Sort</span>
        </h1>
      </a>
      <SearchBar className='search-form' />
      <a href='!#'>Login</a>
    </header>
  );
}

export default Header;
