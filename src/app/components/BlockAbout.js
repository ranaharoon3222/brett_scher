import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';

const BlockAbout = () => {
  return (
    <section className='relative bg-black text-white'>
      <div className='relative -top-6 md:-top-24'>
        <Image
          width={1920}
          height={600}
          className='z-30 relative'
          src='/SHAPE.png'
          alt=''
        />
        <div>
          <Image
            width={300}
            height={300}
            className='z-30 max-w-[150px] md:max-w-[300px]  absolute -top-12 md:-top-16   left-1/2 transform -translate-x-1/2 rounded-full'
            src='/profile-2.png'
            alt=''
          />
        </div>
      </div>

      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-top bg-no-repeat '
        style={{
          backgroundImage: "url('/bg-1-compress.png')",
        }}
      />

      {/* Content Container */}
      <div className='relative z-10 pt-0 top-0 md:-top-10 '>
        {/* About Section */}
        {/* <div className='container mx-auto px-4 py-20 pb-10 md:pb-36 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-8'>
            About Brett Secher
          </h2>
          <p className='max-w-3xl mx-auto text-lg leading-relaxed mb-10 opacity-90'>
            Lorem ipsum dolor sit amet consectetur. Tristique a interdum nunc
            pharetra enim. Massa semper feugiat neque sagittis ut in cursus
            tellus. ipsum nulla ut dictum phasellus odio fames. Facilisi odio
            netus blandit mus tristique donec. Enim risus pellentesque nulla
            bibendum.
          </p>
          <button className='bg-primary border border-white hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-colors'>
            Read more
          </button>
        </div> */}

        {/* Certified Distribution Section */}
        <Container className='pb-20'>
          <div className='relative'>
            <div className='grid md:grid-cols-2 gap-8 items-center pt-16'>
              {/* Left Content */}
              <div className='space-y-6'>
                <Image
                  src='/certified-logo.png'
                  alt='certified-logo'
                  width={300}
                  height={150}
                  className='relative mx-auto md:mx-0 md:-left-5 w-auto'
                />
                <p className='text-lg leading-relaxed opacity-90'>
                  Certified Distribution is a cutting-edge, new age media
                  production company based in New York, revolutionizing the way
                  personal brands and small businesses create, distribute, and
                  leverage content to stand out in today’s competitive market.
                  With a commitment to quality, creativity, and results-driven
                  strategies, CRTFD produces high-performing, visually
                  captivating, and purpose-driven media that captures attention
                  and drives growth.
                </p>
                <Link
                  href={'https://www.crtfd.co/'}
                  className='bg-primary inline-block hover:bg-primary/90 text-white border-white border px-8 py-3 rounded-full transition-colors'
                >
                  GET CRTFD
                </Link>
              </div>

              {/* Right Image */}
              <div className='relative  rounded-3xl overflow-hidden'>
                <Image
                  src='/about-me.png'
                  alt='Certified Distribution'
                  width={600}
                  height={600}
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default BlockAbout;
