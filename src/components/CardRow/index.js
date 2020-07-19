import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import './CardRow.scss';

function CardRow() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <>
      <p>Summer 2020 Anime</p>
      <ItemsCarousel
        className='card-row'
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={5}
        minimumPlaceholderTime={1000}
        placeholderItem={
          <div style={{ height: 200, background: '#900' }}>Placeholder</div>
        }
        // Carousel configurations
        numberOfCards={4}
        gutter={12}
        showSlither={true}
        freeScrolling={true}
        infiniteLoop
        // Active item configurations
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}
        chevronWidth={24}
        rightChevron={'>'}
        leftChevron={'<'}
        outsideChevron={false}
      >
        {Array.from(new Array(8)).map((_, i) => (
          <>
            <img
              src='https://cdn.myanimelist.net/images/anime/1756/108000.jpg'
              alt=''
            />
            <p>Textt akdla dla asljd</p>
          </>
        ))}
      </ItemsCarousel>
    </>
  );
}

export default CardRow;
