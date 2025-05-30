import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import OverviewSection from '../components/Home/OverViewSection';
import TrailingSection from '../components/Home/TrailingSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <TrailingSection />
      {/* You can add more sections here later */}
    </>
  );
};

export default HomePage;
