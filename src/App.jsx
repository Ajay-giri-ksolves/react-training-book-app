import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Detail from './detail';
import NotFound from './notfound';

const About = React.lazy(() => import('./about'));
const Contact = React.lazy(() => import('./contact'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
