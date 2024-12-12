import React from 'react';

const NotFound = React.memo(() => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! This page doesn't exist.</p>
    </div>
  );
});

export default NotFound;
