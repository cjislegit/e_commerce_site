import { Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
