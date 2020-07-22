import React, { useEffect, useState } from 'react';
import Header from '../components/Header/';
import { useParams } from 'react-router-dom';
import { fetchAnimeData } from '../services/jikanAPI';
import Details from '../components/Details';
import LoadingIndicator from '../components/LoadingIndicator';

function DetailsPage() {
  const { id } = useParams();
  const [animeDetails, setAnimeDeatails] = useState(null);

  useEffect(() => {
    const getAnimeDetails = async () => {
      // fetch show details using the id in the url
      const results = await fetchAnimeData(id);
      setAnimeDeatails(results);
    };

    getAnimeDetails();
  }, [id]);

  return (
    <div className='container'>
      <Header />
      {!animeDetails ? (
        <LoadingIndicator />
      ) : (
        <Details detailsObject={animeDetails} />
      )}
    </div>
  );
}

export default DetailsPage;
