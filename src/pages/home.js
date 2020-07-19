import React from 'react';
import Header from '../components/Header/';
import Background from '../components/Background/';
import CardRow from '../components/CardRow';

function HomePage() {
  return (
    <>
      <Background />
      <div className='container'>
        <Header />
        <CardRow />
      </div>
    </>
  );
}

export default HomePage;
