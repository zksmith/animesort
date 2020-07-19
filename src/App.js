import React, { useEffect, useState } from 'react';
import HomePage from './pages/home';

function App() {
  const [currentSeason, setCurrentSeason] = useState(null);
  const [airingData, setAiringData] = useState(null);
  const [mostPopular, setMostPopularData] = useState(null);

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
    <HomePage
      airingData={airingData}
      currentSeasonData={currentSeason}
      mostPopularData={mostPopular}
    />
  );
}

export default App;
