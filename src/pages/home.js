import React, { useState, useEffect } from 'react';
import Header from '../components/Header/';
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
        setMostPopularData(mostPopularResults);
      } catch (err) {
        console.log(err);
      }

      try {
        const seasonResults = await fetchSeasonData();
        setCurrentSeason(seasonResults);
      } catch (err) {
        console.log(err);
      }

      try {
        const airingResults = await fetchAiringData();
        setAiringData(airingResults);
      } catch (err) {
        console.log(err);
      }
    };

    getHomeData();
  }, []);

  return (
    <div className='container'>
      <Header />
      <CardRow
        title='Summer 2020 Anime'
        data={currentSeasonData}
        linkName='season'
      />
      <CardRow title='Most Popular' data={mostPopularData} linkName='popular' />
      <CardRow title='Currently Airing' data={airingData} linkName='airing' />
    </div>
  );
}

export default HomePage;
