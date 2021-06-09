import React, { useState, useEffect } from 'react';
import CardRow from '../components/CardRow';
import {
  fetchMostPopular,
  fetchSeasonData,
  fetchAiringData,
  fetchMoviesData,
} from '../services/jikanAPI';
import { handleAsyncFunction } from '../services/errorWrapper';

function HomePage() {
  const [currentSeasonData, setCurrentSeason] = useState(null);
  const [airingData, setAiringData] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const [mostPopularData, setMostPopularData] = useState(null);

  useEffect(() => {
    const getHomeData = async () => {
      const [mostPopular] = await handleAsyncFunction(fetchMostPopular);

      const [seasonResults] = await handleAsyncFunction(fetchSeasonData);

      const [airingResults] = await handleAsyncFunction(fetchAiringData);

      const [movieResults] = await handleAsyncFunction(fetchMoviesData);

      setMostPopularData(mostPopular);
      setCurrentSeason(seasonResults);
      setAiringData(airingResults);
      setMovieData(movieResults);
    };

    getHomeData();
  }, []);

  return (
    <div className='container'>
      <CardRow
        title='Summer 2020 Anime'
        data={currentSeasonData}
        linkName='season'
      />
      <CardRow title='Top Movies' data={movieData} linkName='movies' />
      <CardRow title='Most Popular' data={mostPopularData} linkName='popular' />
      <CardRow title='Top Airing' data={airingData} linkName='airing' />
    </div>
  );
}

export default HomePage;
