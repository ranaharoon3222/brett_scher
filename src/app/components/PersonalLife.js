'use client';

import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Container from './Container';

const images = [
  {
    url: 'https://picsum.photos/800/600?random=1',
    alt: 'Photography passion',
  },
  {
    url: 'https://picsum.photos/800/600?random=2',
    alt: 'Family time',
  },
  {
    url: 'https://picsum.photos/800/600?random=3',
    alt: 'Professional portrait',
  },
  {
    url: 'https://picsum.photos/800/600?random=4',
    alt: 'Sports and activities',
  },
  {
    url: 'https://picsum.photos/800/600?random=5',
    alt: 'Travel adventures',
  },
  {
    url: 'https://picsum.photos/800/600?random=6',
    alt: 'Cooking passion',
  },
];

const PersonalLife = () => {
  return (
    <section className='bg-[#F2F2F252] py-20'>
      <div className='mx-auto '>
        <Container>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#1B3B67] mb-8'>
            PERSONAL LIFE
          </h2>

          <div className='max-w-4xl mx-auto text-center space-y-6 mb-10'>
            <p className='text-lg text-primary leading-relaxed'>
              Brett was born and raised in Long Island, New York, where he has
              lived his entire life. Outside of his professional endeavors,
              Brett enjoys living a healthy lifestyle, practicing Jiu-Jitsu, and
              indulging in his passion for photography and cooking. He loves to
              travel and spends quality time with friends and family. A sports
              enthusiast, he's a dedicated fan of the Yankees, Knicks, UFC, and
              Texas Longhorn Football.
            </p>
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
          {images.map((image, index) => (
            <SplideSlide key={index} className='py-10'>
              <div className='aspect-[4/3]  overflow-hidden'>
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className='w-full h-full object-cover'
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default PersonalLife;
