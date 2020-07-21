import React, { useState, useEffect } from 'react';
import Header from '../components/Header/';
import Background from '../components/Background/';
import CardRow from '../components/CardRow';
import {
  fetchMostPopular,
  fetchSeasonData,
  fetchAiringData,
} from '../services/jikanAPI';

function HomePage() {
  const [currentSeasonData, setCurrentSeason] = useState(null);
  const [airingData, setAiringData] = useState(null);
  const [mostPopularData, setMostPopularData] = useState(null);

  useEffect(() => {
    const getHomeData = async () => {
      try {
        const mostPopularResults = await fetchMostPopular();
        setMostPopularData({
          anime: mostPopularResults.map((item) => ({
            title: item.title,
            image: item.image_url,
            id: item.mal_id,
          })),
        });
      } catch (err) {
        console.log(err);
      }

      try {
        const seasonResults = await fetchSeasonData();
        setCurrentSeason({
          anime: seasonResults.map((item) => ({
            title: item.title,
            image: item.image_url,
            id: item.mal_id,
          })),
        });
      } catch (err) {
        console.log(err);
      }

      try {
        const airingResults = await fetchAiringData();
        setAiringData({
          anime: airingResults.map((item) => ({
            title: item.title,
            image: item.image_url,
            id: item.mal_id,
          })),
        });
      } catch (err) {
        console.log(err);
      }
    };

    getHomeData();
  }, []);

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
