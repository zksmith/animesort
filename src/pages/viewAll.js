import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchSeasonData,
  fetchMostPopular,
  fetchAiringData,
} from '../services/jikanAPI';
import SearchGrid from '../components/CardGrid';

function ViewAll() {
  const { type } = useParams();
  const [displayedData, setDisplayedData] = useState([]);
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);

  const handleTypeSeason = async () => {
    try {
      const results = await fetchSeasonData();
      setDisplayedData(results);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const handleTypePopular = async () => {
    try {
      const results = await fetchMostPopular();
      setDisplayedData(results);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const handleTypeAiring = async () => {
    try {
      const results = await fetchAiringData();
      setDisplayedData(results);
    } catch (err) {
      console.log(err);
      setError(true);
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
      <h2>{title}</h2>
      {error ? 'Data unavailable' : <SearchGrid array={displayedData} />}
    </div>
  );
}

export default ViewAll;
