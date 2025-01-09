const BlockRealEstate = () => {
  return (
    <section className='relative py-40 pb-48'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-top bg-no-repeat'
        style={{
          backgroundImage: "url('/bg-1-compress.png')",
        }}
      ></div>

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4  pb-20'>
        <div className='max-w-4xl mx-auto text-center text-white space-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
            REAL ESTATE
            <br />
            ENTREPRENEUR
          </h1>
          <p className='text-lg md:text-xl max-w-3xl mx-auto tracking-wide'>
            RYAN IS THE FOUNDER OF SERHANT., THE MULTIDIMENSIONAL REAL ESTATE
            BROKERAGE AT THE INTERSECTION OF TECHNOLOGY, MEDIA, ENTERTAINMENT,
            AND EDUCATION.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-7xl mx-auto'>
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className='backdrop-blur-sm bg-black/30 rounded-2xl p-8 text-center text-white'
            >
              <div className='text-3xl md:text-4xl font-bold mb-4'>
                $10
                <br />
                {index === 3 ? 'Billion' : 'BILLION'}
              </div>
              <p className='text-sm text-gray-300'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockRealEstate;
