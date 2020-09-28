import React from 'react';

import './Details.scss';

function Details({ detailsObject, addButtonHandler }) {
  return (
    <main className='details'>
      <section className='top'>
        <div className='img-container'>
          <img src={detailsObject.image} alt={detailsObject.title} />
          <button
            // onClick={() =>
            //   addButtonHandler(detailsObject.title, detailsObject.image)
            // }
            className='btn'
            style={{ cursor: 'not-allowed' }}
          >
            Add
          </button>
        </div>
        <div className='video-container'>
          <iframe
            title={detailsObject.title}
            width='300'
            height='200'
            id='ytplayer'
            type='text/html'
            src={detailsObject.trailer}
            frameBorder='0'
          ></iframe>
        </div>
      </section>
      <section className='info-section'>
        <p className='secondary-text'>{detailsObject.title_japanese}</p>
        <h2>{detailsObject.title}</h2>
        <p className='secondary-text'>
          {detailsObject.type}, {detailsObject.aired_string}, Average Score:{' '}
          {detailsObject.average_score}, Episode Duration:{' '}
          {detailsObject.duration}
        </p>
        <p className='synopsis'>{detailsObject.synopsis}</p>
      </section>
    </main>
  );
}

export default Details;
