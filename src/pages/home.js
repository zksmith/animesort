import React, { useState, useEffect } from 'react';
import CardRow from '../components/CardRow';
import {
  fetchMostPopular,
  fetchSeasonData,
  fetchAiringData,
  fetchMoviesData,
} from '../services/jikanAPI';

function HomePage() {
  const [currentSeasonData, setCurrentSeason] = useState(null);
  const [airingData, setAiringData] = useState(null);
  const [movieData, setMovieData] = useState(null);
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

      try {
        const movieResults = await fetchMoviesData();
        setMovieData(movieResults);
      } catch (err) {}
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
