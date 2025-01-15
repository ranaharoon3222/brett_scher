const BlockRealEstate = ({ data }) => {
  const primary = data.primary;
  return (
    <section className='relative text-center py-16 md:py-28 md:pb-60'>
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
          <h1 className='text-5xl md:text-6xl font-bold leading-tight'>
            {primary.title}
          </h1>
          <p className='text-center text-lg'>{primary.text}</p>
        </div>

        <a
          target='_blank'
          className='inline-block   bg-primary font-[500] mt-6 px-10  text-center hover:bg-primary/80 hover:text-white transition-all   border border-white rounded-full text-white py-4  uppercase'
          href={primary.button_link.text || '#'}
        >
          {primary.button_text}
        </a>

        {/* Statistics Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-7xl mx-auto'>
          {primary.columns.map((item, index) => (
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
