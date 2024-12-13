import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './themecontext';

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h1>Bookstore</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <ul>
        <li><Link to="/book/1">Book One</Link></li>
        <li><Link to="/book/2">Book Two</Link></li>
      </ul>
    </div>
  );
}

export default Home;
