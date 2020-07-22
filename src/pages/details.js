import React, { useEffect, useState } from 'react';
import Header from '../components/Header/';
import { useParams } from 'react-router-dom';
import { fetchAnimeData } from '../services/jikanAPI';
import Details from '../components/Details';

function DetailsPage() {
  const { id } = useParams();
  const [animeDetails, setAnimeDeatails] = useState(null);

  useEffect(() => {
    console.log('render');
    const getAnimeDetails = async () => {
      const results = await fetchAnimeData(id);
      setAnimeDeatails(results);
    };

    getAnimeDetails();
  }, [id]);

  if (!animeDetails) return 'Loading...';
  return (
    <div className='container'>
      <Header />
      <Details detailsObject={animeDetails} />
    </div>
  );
}

export default DetailsPage;
