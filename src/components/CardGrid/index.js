import React from 'react';
import Card from '../Card';

import './CardGrid.scss';

function CardGrid({ array }) {
  console.log(array);
  return (
    <div className='search-grid'>
      {array.map((item, index) => (
        <Card anime={item} key={index} />
      ))}
    </div>
  );
}

export default CardGrid;
