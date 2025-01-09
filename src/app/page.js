import React from 'react';
import BlockHero from './components/BlockHero';
import BlockRealEstate from './components/BlockRealEstate';
import BlockEngageWithMe from './components/BlockEngageWithMe';
import BlockAbout from './components/BlockAbout';
import BlockTestimonials from './components/BlockTestimonials';

const Home = () => {
  return (
    <div>
      <BlockHero />
      <BlockRealEstate />
      <BlockAbout />
      <BlockTestimonials />
      <BlockEngageWithMe />
    </div>
  );
};

export default Home;
