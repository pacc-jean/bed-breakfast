import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Consistent/Navbar';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Future routes like FAQ, Contact, Booking will go here */}
      </Routes>
    </div>
  );
};

export default App;
