import React from 'react';
import BlockHero from './components/BlockHero';
import BlockRealEstate from './components/BlockRealEstate';
import BlockEngageWithMe from './components/BlockEngageWithMe';
import BlockAbout from './components/BlockAbout';

const Home = () => {
  return (
    <div>
      <BlockHero />
      <BlockRealEstate />
      <BlockAbout />
      <BlockEngageWithMe />
    </div>
  );
};

export default Home;
