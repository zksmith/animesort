import React from 'react';
import Card from '../Card';

import './SearchGrid.scss';

function SearchGrid({ array }) {
  return (
    <div className='search-grid'>
      {array.map((item, index) => (
        <Card anime={item} key={index} />
      ))}
    </div>
  );
}

export default SearchGrid;
