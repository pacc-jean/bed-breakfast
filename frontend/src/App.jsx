import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Consistent/Navbar';
import Footer from './components/Consistent/Footer';
import HomePage from './pages/HomePage';
import MobileBottomNav from './components/Consistent/MobileBottom Nav';
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <MobileBottomNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Future routes like FAQ, Contact, Booking will go here */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
