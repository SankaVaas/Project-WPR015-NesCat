import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Products />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
