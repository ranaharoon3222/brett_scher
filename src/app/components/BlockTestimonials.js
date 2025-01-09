'use client';

import { Quote } from 'lucide-react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Container from './Container';

const testimonials = [
  {
    name: 'Ryan Reynolds',
    subtitle: 'Lorem ipsum dolor sit amer.',
    text: 'Lorem ipsum dolor sit amet consectetur. Tristique a interdum nunc pharetra enim. Massa semper feugiat neque sagittis ut in cursus tellus. ipsum nulla ut dictum phasellus odio fames',
    image: '/testi.png',
  },
  {
    name: 'Ryan Reynolds',
    subtitle: 'Lorem ipsum dolor sit amer.',
    text: 'Lorem ipsum dolor sit amet consectetur. Tristique a interdum nunc pharetra enim. Massa semper feugiat neque sagittis ut in cursus tellus. ipsum nulla ut dictum phasellus odio fames',
    image: '/testi.png',
  },
  {
    name: 'Rob Wilson',
    subtitle: 'Lorem ipsum dolor sit amer.',
    text: 'Lorem ipsum dolor sit amet consectetur. Tristique a interdum nunc pharetra enim. Massa semper feugiat neque sagittis ut in cursus tellus. ipsum nulla ut dictum phasellus odio fames',
    image: '/testi.png',
  },
  {
    name: 'Ryan Reynolds',
    subtitle: 'Lorem ipsum dolor sit amer.',
    text: 'Lorem ipsum dolor sit amet consectetur. Tristique a interdum nunc pharetra enim. Massa semper feugiat neque sagittis ut in cursus tellus. ipsum nulla ut dictum phasellus odio fames',
    image: '/testi.png',
  },
];

const BlockTestimonials = () => {
  return (
    <section className='bg-gray-50 py-20'>
      <Container className='space-y-10'>
        <h2 className='text-primary text-4xl md:text-5xl font-bold text-center mb-16'>
          TESTIMONIALS
        </h2>

        <Splide
          options={{
            type: 'slide',
            perPage: 3,
            gap: '2rem',
            pagination: true,
            arrows: false,
            breakpoints: {
              1024: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
          aria-label='Testimonials'
        >
          {testimonials.map((testimonial, index) => (
            <SplideSlide key={index} className='py-10'>
              <div className='bg-white rounded-2xl shadow-md p-8 relative mt-12'>
                <div className='absolute -top-12 left-1/2 -translate-x-1/2'>
                  <div className='w-24 h-24 rounded-full border-2 border-primary overflow-hidden'>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={96}
                      height={96}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                <div className='text-center pt-12 space-y-4'>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    {testimonial.name}
                  </h3>
                  <p className='text-gray-600'>{testimonial.subtitle}</p>
                  <div className='flex justify-center text-primary'>
                    <Quote size={24} />
                  </div>
                  <p className='text-gray-600 leading-relaxed'>
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </Container>
    </section>
  );
};

export default BlockTestimonials;
