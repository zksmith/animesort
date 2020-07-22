import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ anime }) {
  return (
    <Link to={`/details/${anime.id}`} className='card'>
      <img src={anime.image} alt='' />
      <p>{anime.title}</p>
    </Link>
  );
}

export default Card;
