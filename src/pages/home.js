import React, { useState, useEffect } from 'react';
import Header from '../components/Header/';
import Background from '../components/Background/';
import CardRow from '../components/CardRow';

function HomePage() {
  const [currentSeasonData, setCurrentSeason] = useState(null);
  const [airingData, setAiringData] = useState(null);
  const [mostPopularData, setMostPopularData] = useState(null);

  useEffect(() => {
    const fetchMostPopular = async () => {
      const response = await fetch(
        'https://api.jikan.moe/v3/top/anime/1/bypopularity'
      );

      if (response.ok) {
        const json = await response.json();

        setMostPopularData({
          anime: json.top.map((item) => ({
            title: item.title,
            image: item.image_url,
            id: item.mal_id,
          })),
        });
      }
    };

    const fetchSeasonData = async () => {
      const response = await fetch(
        'https://api.jikan.moe/v3/season/2020/summer'
      );

      if (response.ok) {
        const json = await response.json();

        setCurrentSeason({
          anime: json.anime.map((item) => ({
            title: item.title,
            image: item.image_url,
            id: item.mal_id,
          })),
        });
      }
    };

    const fetchAiringData = async () => {
      const response = await fetch(
        'https://api.jikan.moe/v3/top/anime/1/airing'
      );

      if (response.ok) {
        const json = await response.json();

        setAiringData({
          anime: json.top.map((item) => ({
            title: item.title,
            image: item.image_url,
            id: item.mal_id,
          })),
        });
      }
    };

    fetchSeasonData();
    fetchAiringData();
    fetchMostPopular();
    return () => {};
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
