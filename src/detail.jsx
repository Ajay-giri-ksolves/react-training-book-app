import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Book Detail</h1>
      <p>You selected Book {id}</p>
    </div>
  );
}

export default Detail;
