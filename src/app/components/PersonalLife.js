'use client';

import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Container from './Container';
import RichTextComponent from './RichText';

const BlockPersonalLife = ({ data }) => {
  const primary = data.primary;

  return (
    <section className='bg-[#F2F2F252] py-20'>
      <div className='mx-auto '>
        <Container>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#1B3B67] mb-8'>
            {primary.title}
          </h2>

          <div className='max-w-4xl mx-auto text-center space-y-6 mb-10'>
            <RichTextComponent
              content={primary.description}
              paraClass={'text-lg text-primary leading-relaxed'}
            />
          </div>
        </Container>

        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            gap: '0rem',
            pagination: true,
            arrows: false,
            autoplay: true,
            interval: 4000,
            breakpoints: {
              1024: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
          aria-label='Personal Life Images'
        >
          {primary.images.map((image, index) => (
            <SplideSlide key={index} className='py-10'>
              <div className='aspect-[2/3]  overflow-hidden'>
                <Image
                  src={image.image.url}
                  alt={image?.alt || 'Personal Life'}
                  width={800}
                  height={600}
                  className='w-full h-full object-cover object-center'
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default BlockPersonalLife;
