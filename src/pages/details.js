import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAnimeData } from '../services/jikanAPI';
import Details from '../components/Details';
import LoadingIndicator from '../components/LoadingIndicator';
import { addToList } from '../services/userActions';

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

  const addButtonHandler = async (title, image) => {
    try {
      await addToList(title, image, id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container'>
      {!animeDetails ? (
        <LoadingIndicator />
      ) : (
        <Details
          detailsObject={animeDetails}
          addButtonHandler={addButtonHandler}
        />
      )}
    </div>
  );
}

export default DetailsPage;
