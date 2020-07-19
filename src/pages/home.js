import React from 'react';
import Header from '../components/Header/';
import Background from '../components/Background/';
import CardRow from '../components/CardRow';

function HomePage({ airingData, currentSeasonData, mostPopularData }) {
  return (
    <>
      <Background />
      <div className='container'>
        <Header />
        <CardRow title='Summer 2020 Anime' data={currentSeasonData} />
        <CardRow title='Most Popular' data={mostPopularData} />
        <CardRow title='Currently Airing' data={airingData} />
      </div>
    </>
  );
}

export default HomePage;
