import Image from 'next/image';
import React from 'react';
import Container from './Container';
import Link from 'next/link';

const BlockHero = ({ data }) => {
  const primary = data.primary;

  return (
    <>
      {/*<!-- Component: Two columns even layout --> */}
      <section>
        <Container className='container px-6 py-10 m-auto'>
          <div className=' pb-10 md:pb-0 grid grid-cols-4 items-center gap-6 md:grid-cols-8 lg:grid-cols-12'>
            <div className='col-span-4 lg:col-span-7 space-y-14'>
              <h1 className='text-8xl uppercase font-[900] max-w-[500px]'>
                <span className='text-[#143764]'> {primary.title} </span>
                {primary.title_2}
              </h1>
              <p className='text-primary leading-7 text-xl max-w-[590px]'>
                {primary.text}
              </p>

              <div className='flex flex-wrap items-center gap-4'>
                <Link
                  className='block  bg-[#1437641A] font-[500] hover:bg-primary hover:text-white transition-all   border border-[#14376480] rounded-full text-primary py-4 px-6 uppercase'
                  href={primary.button_link.text || '#'}
                >
                  {primary.button_text}
                </Link>
                <Link
                  href={primary.button_link_2.text || '#'}
                  className='block hover:bg-black hover:text-white transition-all  bg-[#143764] font-[500]   border border-[#14376480] rounded-full text-[#fff] py-4 px-6 uppercase'
                >
                  {primary.button_text_2}
                </Link>
              </div>
            </div>
            <div className='col-span-4 -order-1 md:order-1 lg:col-span-5'>
              <Image
                width={700}
                height={900}
                src={'/hero-image.png'}
                alt={'Hero image'}
              />
            </div>
          </div>
        </Container>
      </section>
      {/*<!-- End Two columns even layout --> */}
    </>
  );
};

export default BlockHero;
