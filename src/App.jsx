import { useState } from 'react';
import './App.css';
import Navbar from './component/navbar';
import Home from './component/home';
import About from './component/about';
import Courses from './component/courses';
import Shop from './component/shop';
import Contact from './component/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar /> {/* Always visible on all routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
