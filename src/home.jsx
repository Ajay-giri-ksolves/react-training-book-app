import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bookstore</h1>
      <ul>
        <li><Link to="/book/1">Book One</Link></li>
        <li><Link to="/book/2">Book Two</Link></li>
      </ul>
    </div>
  );
}

export default Home;
