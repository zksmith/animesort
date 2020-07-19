import React from 'react';
import './Card.scss';

function Card({ anime }) {
  return (
    <a href={`/anime/${anime.id}`} className='card'>
      <img src={anime.image} alt='' />
      <p>{anime.title}</p>
    </a>
  );
}

export default Card;
