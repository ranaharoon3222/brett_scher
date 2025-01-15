import React from 'react';
import BlockHero from '@/app/components/BlockHero';
import BlockRealEstate from '@/app/components/BlockRealEstate';
import BlockEngageWithMe from '@/app/components/BlockEngageWithMe';
import BlockAbout from '@/app/components/BlockAbout';
import BlockTestimonials from '@/app/components/BlockTestimonials';
import BlockAboutPage from './BlockAboutPage';
import PersonalLife from './PersonalLife';
import Contact from './Contact';

const SwitchComponent = ({ page, global }) => {
  return (
    <div>
      {page.data.slices.map((slice) => {
        switch (slice.slice_type) {
          case 'hero':
            return <BlockHero key={slice.id} data={slice} />;
          case 'insurance_block':
            return <BlockRealEstate key={slice.id} data={slice} />;
          case 'certified_distribution':
            return <BlockAbout key={slice.id} data={slice} />;
          case 'testimonials':
            return <BlockTestimonials key={slice.id} data={slice} />;
          case 'engage_w_ith_me':
            return <BlockEngageWithMe key={slice.id} data={slice} />;
          case 'about_block':
            return <BlockAboutPage key={slice.id} data={slice} />;
          case 'personal_life':
            return <PersonalLife key={slice.id} data={slice} />;
          case 'block_contact':
            return <Contact global={global} key={slice.id} data={slice} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default SwitchComponent;
