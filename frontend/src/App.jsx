import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Consistent/Navbar';
import MobileBottomNav from './components/Consistent/MobileBottom Nav';
import Footer from './components/Consistent/Footer';
import HomePage from './pages/HomePage';
import BookingsPage from './pages/BookingsPage';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <MobileBottomNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookingsPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
