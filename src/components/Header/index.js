import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <a href='#!'>
        <h1>AnimeSort</h1>
      </a>
      <form className='search-form'>
        <input type='text' placeholder='Search...' />
        <button type='submit'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='icon icon-tabler icon-tabler-search'
            width='20'
            height='24'
            viewBox='0 0 24 24'
            stroke-width='3'
            stroke='#2c3e50'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' />
            <circle cx='10' cy='10' r='7' />
            <line x1='21' y1='21' x2='15' y2='15' />
          </svg>
        </button>
      </form>
      <a href='!#'>Login</a>
    </header>
  );
}

export default Header;
