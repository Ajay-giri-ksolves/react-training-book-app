import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Detail from './detail';
import About from './about';
import Contact from './contact';
import NotFound from './notfound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:id" element={<Detail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
