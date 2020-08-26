import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardGrid from '../components/CardGrid';
import LoadingIndicator from '../components/LoadingIndicator';

function ListPage() {
  const { username } = useParams();
  const [listData, setListData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getListData = async () => {
      try {
        const response = await fetch(
          `https://animesort-backend.herokuapp.com/api/list/${username}`
        );

        const json = await response.json();
        if (response.ok) {
          console.log(json);
          setListData(json);
        } else {
          throw json;
        }
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    getListData();
  }, [username]);

  if (error) {
    return (
      <div className='container'>
        <h2>Unable to load data for {username}</h2>
      </div>
    );
  } else {
    return (
      <div className='container'>
        {listData ? (
          <>
            <h2>{listData?.username}'s List</h2>
            {listData?.list && <CardGrid array={listData.list} />}
          </>
        ) : (
          <LoadingIndicator />
        )}
      </div>
    );
  }
}

export default ListPage;
