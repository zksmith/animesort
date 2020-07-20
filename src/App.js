import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home';
import AnimePage from './pages/anime';
import SearchPage from './pages/search';
import ListPage from './pages/list';

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
    <Router>
      <Switch>
        <Route path='/' exact>
          <HomePage
            airingData={airingData}
            currentSeasonData={currentSeason}
            mostPopularData={mostPopular}
          />
        </Route>
        <Route path='/anime/:id'>
          <AnimePage />
        </Route>
        <Route path='/search/:query'>
          <SearchPage />
        </Route>
        <Route path='/list/:username'>
          <ListPage />
        </Route>
        <Route path='*'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
