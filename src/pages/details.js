import React, { useEffect, useState } from 'react';
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

  const addToList = async (title, image) => {
    try {
      const response = await fetch(`http://localhost:5000/api/list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, image, animeid: id }),
      });
      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container'>
      {!animeDetails ? (
        <LoadingIndicator />
      ) : (
        <Details detailsObject={animeDetails} addButtonHandler={addToList} />
      )}
    </div>
  );
}

export default DetailsPage;
