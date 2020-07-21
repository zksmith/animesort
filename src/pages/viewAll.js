import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import {
  fetchSeasonData,
  fetchMostPopular,
  fetchAiringData,
} from '../services/jikanAPI';
import SearchGrid from '../components/SearchGrid';

function ViewAll() {
  const { type } = useParams();
  const [displayedData, setDisplayedData] = useState([]);
  const [title, setTitle] = useState('');

  const handleTypeSeason = async () => {
    try {
      const results = await fetchSeasonData();
      setDisplayedData(
        results.map((item) => ({
          title: item.title,
          image: item.image_url,
          id: item.mal_id,
        }))
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleTypePopular = async () => {
    try {
      const results = await fetchMostPopular();
      setDisplayedData(
        results.map((item) => ({
          title: item.title,
          image: item.image_url,
          id: item.mal_id,
        }))
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleTypeAiring = async () => {
    try {
      const results = await fetchAiringData();
      setDisplayedData(
        results.map((item) => ({
          title: item.title,
          image: item.image_url,
          id: item.mal_id,
        }))
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    switch (type.toLowerCase()) {
      case 'season':
        handleTypeSeason();
        setTitle('Season 2020 Anime');
        break;
      case 'popular':
        handleTypePopular();
        setTitle('Most Popular Anime');
        break;
      case 'airing':
        handleTypeAiring();
        setTitle('Currently Airing Anime');
        break;
      default:
        break;
    }

    return () => {};
  }, [type]);

  return (
    <div className='container'>
      <Header />
      <h2>{title}</h2>
      <SearchGrid array={displayedData} />
    </div>
  );
}

export default ViewAll;
