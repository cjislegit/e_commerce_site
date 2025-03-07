import { Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
