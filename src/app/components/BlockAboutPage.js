import Image from 'next/image';
import Container from './Container';

const BlockAboutPage = () => {
  return (
    <section className='relative  text-white overflow-hidden'>
      <Container className='  md:py-20 py-10'>
        <div className='grid lg:grid-cols-12 gap-12 items-center '>
          {/* Left Content */}
          <div className='space-y-8 md:col-span-7 '>
            <h1 className='text-3xl text-primary md:text-5xl  font-bold leading-tight'>
              Brett Scher is a founder, entrepreneur, insurance strategist,
              media producer, and the Owner/CEO of Life with Brett Scher and
              Certified Distribution.
            </h1>
            <p className='text-lg md:text-xl text-black leading-relaxed max-w-2xl'>
              In 2024, in his first year, Brett has already helped hundreds of
              individuals secure life insurance and supported both small and
              large businesses with comprehensive employee benefits packages. At
              the same time, Brett leads his media agency, Certified
              Distribution, where he creates impactful marketing content for
              businesses across the Tri-State area.
            </p>
            <p className='text-lg md:text-xl text-black leading-relaxed max-w-2xl'>
              With innovative strategies and new-age marketing ideas, Certified
              Distribution builds powerful digital platforms that amplify brand
              visibility and drive real results. The agency has quickly captured
              the attention of businesses across New York, eager to leverage
              Brett’s cutting-edge media strategies.
            </p>
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
                  src='/about-c.jpeg'
                  alt='Professional Portrait'
                  width={800}
                  height={800}
                  className='object-cover object-top'
                  priority
                />
              </div>

              {/* Floating Stats Card */}
              <div className='absolute -bottom-6 -left-6 bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl border border-gray-800'>
                <div className='flex items-center gap-4'>
                  <div className='h-12 w-12 rounded-full bg-gradient-to-r from-blue-700 to-primary/70 flex items-center justify-center'>
                    <span className='text-2xl font-bold'>5</span>
                  </div>
                  <div>
                    <p className='text-sm text-gray-400'>Years of</p>
                    <p className='font-semibold'>Leadership Experience</p>
                  </div>
                </div>
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
