import React from 'react';
import { useParams } from 'react-router-dom';

const book_details = {"1": {name: "Wings Of Fire", author: "APJ Abdul Kalam", year: '1998'},
                      "2": {name: "Harry porter", author: "Barak Obama", year: '1657'}}
function Detail() {
  const { id } = useParams();
  const book = book_details[id]

  if (!book) {
    return(
      <div>
        <h1>Book Detail</h1>
        <p>No selected Book details</p>
      </div>
    );
  }
  else{
    return (
      <div>
        <h1>Book Detail</h1>
        <p>Book Name: {book['name']}</p>
        <p>Book Author: {book['author']}</p>
        <p>Book Year: {book['year']}</p>
      </div>
    );
  }
}

export default Detail;
