import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchResults } from '../services/jikanAPI';
import SearchGrid from '../components/CardGrid';
import LoadingIndicator from '../components/LoadingIndicator';

function SearchPage() {
  const { query } = useParams();
  const [animeArray, setAnimeArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const handleSearch = async () => {
      try {
        const results = await fetchSearchResults(query);
        setAnimeArray(results);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    handleSearch();
  }, [query]);

  return (
    <div className='container'>
      <h2>Search results for "{query}"</h2>
      {loading ? <LoadingIndicator /> : <SearchGrid array={animeArray} />}
    </div>
  );
}

export default SearchPage;
