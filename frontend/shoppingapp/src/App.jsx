import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Mens from './Components/Mens';
import Womens from './Components/Womens';
import Kids from './Components/Kids';
import Product from './Components/Product'
import Cart from './Components/Cart';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // console.log("App.jsx is rendering now a time");

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
