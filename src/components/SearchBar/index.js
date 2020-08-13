import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { fetchSearchResults } from '../../services/jikanAPI';
import LoadingIndicator from '../LoadingIndicator';

import './SearchBar.scss';

function SearchBar({ className }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // cancelSearch gets set to true everytime the user types
    let cancelSearch = true;

    const handleSearch = async (query) => {
      // if the searhterm hasnt changed fetch the results
      if (!cancelSearch) {
        try {
          const results = await fetchSearchResults(query);
          setSearchResults(results.splice(0, 9));
          setLoading(false);
        } catch (err) {
          console.log(err.message);
          setLoading(false);
        }
      }
    };

    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        setLoading(true);
        cancelSearch = false;
        handleSearch(searchTerm);
      } else {
        // if the search bar is empty cancel search and remove results
        cancelSearch = true;
        setSearchResults([]);
      }
    }, 1000);

    return () => {
      cancelSearch = true;
      clearTimeout(delayDebounceFn);
    };
  }, [searchTerm]);

  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${searchTerm}`);
    setSearchResults([]);
    setSearchTerm('');
  };

  return (
    <div className={className}>
      <form onSubmit={(e) => handleSubmit(e)}>
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
          {loading ? (
            <LoadingIndicator />
          ) : (
            <ul>
              {searchResults.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/details/${item.id}`}
                    onClick={() => setSearchTerm('')}
                  >
                    <span
                      style={{ backgroundImage: `url(${item.image})` }}
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
          )}
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
