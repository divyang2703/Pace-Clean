import React from 'react';
import Navbar from './compnents/Navbar';
import Hero from './compnents/Hero';
import Services from './compnents/Services';
import Footer from './compnents/Footer';
import Pricing from './compnents/Pricing';
import About from './compnents/About';

import {
  Routes,
  Route,
} from "react-router-dom";
import Contact from './compnents/Contact';
import ScrollToTop from './compnents/ScrollToTop';




function App() {
  return (
    <>
    
    <div>
      <Navbar />
      <ScrollToTop />
          <Routes>
            
            <Route  exact path="/" element={<Hero />} /> 
            
            <Route  excat path="/services" element={<Services />} /> 
           
            <Route  excat path="/pricing" element={<Pricing />} /> 
            <Route  excat path="/about" element={<About />} /> 
            <Route  excat path="/contact" element={<Contact />} /> 
          </Routes>
      <Footer />
    </div>
    
    </>
  );
}

export default App;
