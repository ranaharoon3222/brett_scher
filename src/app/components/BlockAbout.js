import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import RichTextComponent from './RichText';

const BlockAbout = ({ data }) => {
  const primary = data.primary;

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
            src={primary.profile.url}
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
        {/* Certified Distribution Section */}
        <Container className='pb-20'>
          <div className='relative'>
            <div className='grid md:grid-cols-2 gap-8 items-center pt-16'>
              {/* Left Content */}
              <div className='space-y-6'>
                <Image
                  src={primary.certified_logo.url}
                  alt='certified-logo'
                  width={400}
                  height={150}
                  className='relative mx-auto md:mx-0 md:-left-5 w-auto'
                />
                <RichTextComponent
                  paraClass={'text-lg leading-relaxed opacity-90'}
                  content={primary.text}
                />

                <Link
                  href={primary.button_link.text || '#'}
                  className='bg-primary inline-block hover:bg-primary/90 text-white border-white border px-8 py-3 rounded-full transition-colors'
                >
                  {primary.button_text}
                </Link>
              </div>

              {/* Right Image */}
              <div className='relative  rounded-3xl overflow-hidden'>
                <Image
                  src={primary.right_image.url}
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
