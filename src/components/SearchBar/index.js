import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.scss';

function SearchBar({ className }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // cancelSearch gets set to true everytime the user types
    let cancelSearch = true;

    const handleSearch = async (query) => {
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${query}&page=1`
      );
      const json = await response.json();

      // if the searhterm hasnt changed since this function was called display the results
      if (!cancelSearch) {
        setSearchResults(json.results.splice(0, 9));
      }
    };

    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        cancelSearch = false;
        handleSearch(searchTerm);
      } else {
        // if the search bar is empty(!searchTerm) cancel search and remove results
        cancelSearch = true;
        setSearchResults([]);
      }
    }, 1000);

    return () => {
      cancelSearch = true;
      clearTimeout(delayDebounceFn);
    };
  }, [searchTerm]);

  return (
    <div className={className}>
      <form>
        <input
          type='text'
          placeholder='Search...'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='3'
            stroke='#2c3e50'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' />
            <circle cx='10' cy='10' r='7' />
            <line x1='21' y1='21' x2='15' y2='15' />
          </svg>
        </button>
      </form>
      {searchTerm && (
        <div className='search-results'>
          <ul>
            {searchResults.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/anime/${item.mal_id}`}
                  onClick={() => setSearchTerm('')}
                >
                  <span
                    style={{ backgroundImage: `url(${item.image_url})` }}
                    className='image'
                  />
                  <div>
                    <p>{item.title}</p>
                    <p className='secondary-text'>
                      {item.type}, {new Date(item.start_date).getFullYear()}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <p className='search-result-bottom'>
            <Link
              to={`/search/${searchTerm}`}
              onClick={() => setSearchTerm('')}
            >
              View all results for <strong>{searchTerm}</strong>
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
