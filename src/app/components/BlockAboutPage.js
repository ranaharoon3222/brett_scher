import Image from 'next/image';
import Container from './Container';
import RichTextComponent from './RichText';

const BlockAboutPage = ({ data }) => {
  const primary = data.primary;

  return (
    <section className='relative  text-white overflow-hidden'>
      <Container className='  md:py-20 py-10'>
        <div className='grid lg:grid-cols-12 gap-12 items-center '>
          {/* Left Content */}
          <div className='space-y-8 md:col-span-7 '>
            <h1 className='text-3xl text-primary md:text-5xl  font-bold leading-tight'>
              {primary.title}
            </h1>
            <RichTextComponent
              content={primary.text}
              paraClass={
                'text-lg md:text-xl text-black leading-relaxed max-w-2xl'
              }
            />
          </div>

          {/* Right Content - Image */}
          <div className='relative md:col-span-5 -order-1 md:order-1'>
            <div className='relative  w-full'>
              {/* Gradient Border */}
              <div className='absolute inset-0 bg-gradient-to-r from-primary to-primary/20 rounded-3xl transform rotate-6 opacity-20 blur-xl'></div>
              <div className='absolute inset-0 bg-gradient-to-r from-primary to-primary/10 rounded-3xl transform -rotate-6 opacity-20 blur-xl'></div>

              {/* Main Image */}
              <div className='relative min-h-full  w-full rounded-3xl overflow-hidden border border-gray-800'>
                <Image
                  src={primary.image.url}
                  alt='Professional Portrait'
                  width={800}
                  height={800}
                  className='object-cover object-top'
                  priority
                />
              </div>

              {/* Decorative Elements */}
              <div className='absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 opacity-20 blur-2xl'></div>
              <div className='absolute top-1/2 -right-12 h-40 w-40 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl'></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlockAboutPage;
