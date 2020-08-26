import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardGrid from '../components/CardGrid';

function ListPage() {
  const { username } = useParams();
  const [listData, setListData] = useState(null);

  useEffect(() => {
    const getListData = async () => {
      try {
        const response = await fetch(
          `https://animesort-backend.herokuapp.com/api/list/${username}`
        );

        const json = await response.json();
        console.log(json);
        setListData(json);
      } catch (err) {
        console.log(err);
      }
    };

    getListData();
  }, [username]);

  return (
    <div className='container'>
      <h2>{listData?.username}'s List</h2>
      {listData?.list && <CardGrid array={listData.list} />}
    </div>
  );
}

export default ListPage;
