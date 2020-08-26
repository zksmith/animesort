import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardGrid from '../components/CardGrid';
import LoadingIndicator from '../components/LoadingIndicator';
import { getListData } from '../services/userActions';

function ListPage() {
  const { username } = useParams();
  const [listData, setListData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const onLoad = async () => {
      try {
        const data = await getListData(username);
        setListData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    onLoad();
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
