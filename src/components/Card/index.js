import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ anime }) {
  const animeId = anime.id ? anime.id : anime.animeid;
  return (
    <Link to={`/details/${animeId}`} className='card'>
      <img src={anime.image} alt='' />
      <p>{anime.title}</p>
    </Link>
  );
}

export default Card;
