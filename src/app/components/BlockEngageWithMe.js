import { Instagram, Linkedin } from 'lucide-react';
import Container from './Container';
import Image from 'next/image';

const BlockEngageWithMe = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/engage with me.png')",
      }}
      className='relative bg-cover bg-center bg-no-repeat bg-black'
    >
      {/* Content Container */}
      <Container className='relative  py-0'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          {/* Left Content */}
          <div className='max-w-2xl py-5 space-y-6 text-white'>
            <h2 className='text-4xl  md:text-5xl font-bold'>
              Engage With Me 24/7
            </h2>
            <p className='text-lg md:text-xl leading-relaxed opacity-90'>
              After spending well over a decade in real estate and
              entertainment, I love to share what I've learned and what's on my
              mind to connect with those who've supported me since the start of
              my career.
            </p>
          </div>

          {/* Right Content - Social Links */}
          <div
            className='w-full min-w-52 lg:w-auto'
            style={{
              backgroundImage: "url('/engage-shape.png')",
            }}
          >
            <div className='py-10'>
              {/* Instagram Link */}
              <a
                href='https://instagram.com/brettsecher'
                target='_blank'
                rel='noopener noreferrer'
                className='block rounded-lg p-4 space-y-4 text-center hover:bg-gray-100 transition-colors'
              >
                <Image
                  width={50}
                  height={50}
                  className='mx-auto'
                  alt='Instagram'
                  src='/insta.png'
                />

                <div className='font-medium'>@brettsecher</div>
                <div className='text-sm text-gray-600 underline'>Visit ↗</div>
              </a>

              {/* LinkedIn Link */}
              <a
                href='https://instagram.com/brettsecher'
                target='_blank'
                rel='noopener noreferrer'
                className='block rounded-lg p-4 space-y-4 text-center hover:bg-gray-100 transition-colors'
              >
                <Image
                  width={50}
                  height={50}
                  className='mx-auto'
                  alt='Linkedin'
                  src='/linked.png'
                />

                <div className='font-medium'>@brettsecher</div>
                <div className='text-sm text-gray-600 underline'>Visit ↗</div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlockEngageWithMe;
