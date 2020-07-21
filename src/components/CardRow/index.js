import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import ChevronButton from './ChevronButton';
import Card from '../Card';

import './CardRow.scss';

function CardRow({ title, data }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [numberOfCards, setNumOfCards] = useState(5);
  const [animeArray, setAnimeArray] = useState([]);

  // sets the number of cards in the row based on window width
  function upDateNumOfCards() {
    if (window.innerWidth < 535) {
      setNumOfCards(2);
    } else if (window.innerWidth < 800) {
      setNumOfCards(3);
    } else {
      setNumOfCards(5);
    }
  }

  useEffect(() => {
    // Max amount of items in each row is 20
    setAnimeArray(data?.anime.splice(0, 20));

    upDateNumOfCards();
    window.addEventListener('resize', upDateNumOfCards);
  }, [data]);

  return (
    <div className='card-row'>
      <div className='row-top'>
        <h2>{title}</h2>
        <p>View more</p>
      </div>
      <ItemsCarousel
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
        slidesToScroll={5}
        // Active item configurations
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}
        chevronWidth={24}
        rightChevron={<ChevronButton type='right' />}
        leftChevron={<ChevronButton type='left' />}
        outsideChevron={false}
        alwaysShowChevrons={false}
      >
        {!animeArray
          ? []
          : animeArray.map((animeObject, index) => (
              <Card anime={animeObject} key={index} />
            ))}
      </ItemsCarousel>
    </div>
  );
}

export default CardRow;
