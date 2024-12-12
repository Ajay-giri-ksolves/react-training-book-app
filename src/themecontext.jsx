import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  // thene has a default value of light and setTheme is used for the updte for the theme variable

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  // here we are 

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
