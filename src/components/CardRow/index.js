import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';

import './CardRow.scss';

function CardRow() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const [numberOfCards, setNumOfCards] = useState(5);

  // sets the number of cards in the row based on window width
  function upDateNumOfCards() {
    if (window.innerWidth < 400) {
      setNumOfCards(2);
    } else if (window.innerWidth < 800) {
      setNumOfCards(3);
    } else {
      setNumOfCards(5);
    }
  }

  useEffect(() => {
    upDateNumOfCards();
    window.addEventListener('resize', upDateNumOfCards);
  }, []);

  console.log(window.innerWidth);

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
          <div style={{ height: 280, background: 'rgba(27,32,48,0.9)' }}></div>
        }
        // Carousel configurations
        numberOfCards={numberOfCards}
        gutter={12}
        showSlither={true}
        freeScrolling={true}
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
