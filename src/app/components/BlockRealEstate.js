const BlockRealEstate = () => {
  const data = [
    {
      title: 'LIFE <br> INSURANCE',
      text: '',
    },
    {
      title: 'EMPLOYEE <br> BENEFITS',
      text: '',
    },
    {
      title: 'DENTAL AND VISION',
      text: '',
    },
    {
      title: 'DISABILITY <br> PLANS',
      text: '',
    },
  ];

  return (
    <section className='relative py-40 pb-60'>
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
          <h1 className='text-6xl md:text-8xl font-bold leading-tight'>
            Insurance <br /> Professional
          </h1>
          <p className='text-center text-base'>
            Serving New York and New Jersey
          </p>
        </div>

        {/* Statistics Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-7xl mx-auto'>
          {data.map((item, index) => (
            <div
              key={index}
              className='backdrop-blur-xl bg-white/10 shadow-sm shadow-white/50 rounded-2xl p-8 text-center text-white'
            >
              <div
                dangerouslySetInnerHTML={{ __html: item.title }}
                className='text-4xl md:text-4xl font-bold mb-4'
              ></div>
              {/* <p className='text-sm text-gray-300'>{item.text}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockRealEstate;
