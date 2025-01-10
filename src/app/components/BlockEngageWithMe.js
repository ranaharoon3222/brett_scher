// import { Instagram, Linkedin } from 'lucide-react';
// import Container from './Container';
// import Image from 'next/image';

// const BlockEngageWithMe = () => {
//   return (
//     <section
//       style={{
//         backgroundImage: "url('/engage with me.png')",
//       }}
//       className='relative bg-cover bg-center bg-no-repeat bg-black'
//     >
//       {/* Content Container */}
//       <Container className='relative  !py-0'>
//         <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
//           {/* Left Content */}
//           <div className='max-w-2xl py-5 space-y-6 text-white'>
//             <h2 className='text-4xl  md:text-5xl font-bold'>
//               Engage With Me 24/7
//             </h2>
//             <p className='text-lg md:text-xl leading-relaxed opacity-90'>
//               After spending well over a decade in real estate and
//               entertainment, I love to share what I've learned and what's on my
//               mind to connect with those who've supported me since the start of
//               my career.
//             </p>
//           </div>

//           {/* Right Content - Social Links */}
//           <div
//             className='w-full min-w-52 lg:w-auto'
//             style={{
//               backgroundImage: "url('/engage-shape.png')",
//             }}
//           >
//             <div className='py-10'>
//               {/* Instagram Link */}
//               <a
//                 href='https://instagram.com/brettsecher'
//                 target='_blank'
//                 rel='noopener noreferrer'
//                 className='block rounded-lg p-4 space-y-4 text-center hover:bg-gray-100 transition-colors'
//               >
//                 <Image
//                   width={50}
//                   height={50}
//                   className='mx-auto'
//                   alt='Instagram'
//                   src='/insta.png'
//                 />

//                 <div className='font-medium'>@brettsecher</div>
//                 <div className='text-sm text-gray-600 underline'>Visit ↗</div>
//               </a>

//               {/* LinkedIn Link */}
//               <a
//                 href='https://instagram.com/brettsecher'
//                 target='_blank'
//                 rel='noopener noreferrer'
//                 className='block rounded-lg p-4 space-y-4 text-center hover:bg-gray-100 transition-colors'
//               >
//                 <Image
//                   width={50}
//                   height={50}
//                   className='mx-auto'
//                   alt='Linkedin'
//                   src='/linked.png'
//                 />

//                 <div className='font-medium'>@brettsecher</div>
//                 <div className='text-sm text-gray-600 underline'>Visit ↗</div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default BlockEngageWithMe;

'use client';

import { Instagram, Linkedin } from 'lucide-react';
import { useEffect, useRef } from 'react';

const BlockEngageWithMe = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Particle system
    const particles = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`,
      });
    }

    // Animation
    function animate() {
      ctx.fillStyle = 'rgba(17, 24, 39, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener('resize', setSize);
  }, []);

  return (
    <section className='relative overflow-hidden bg-primary'>
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{ opacity: 0.5 }}
      />

      <div className='relative z-10'>
        <div className='max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-normal'>
              Engage
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary'>
                With Brett scher
              </span>
            </h2>
            <p className='max-w-2xl mx-auto text-xl text-gray-300'>
              Join our thriving community of innovators and stay connected with
              the latest updates and insights.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            {/* Instagram Card */}
            <div className='group relative'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-300 rounded-lg  opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
              <a
                href='#'
                className='relative flex items-center gap-4 px-8 py-6 bg-gray-900 rounded-lg leading-none'
              >
                <div className='flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 p-0.5 transform group-hover:scale-110 transition-transform duration-200'>
                  <Instagram className='w-8 h-8 text-white' />
                </div>
                <div className='flex flex-col items-start'>
                  <span className='text-pink-400 font-medium'>Instagram</span>
                  <span className='text-2xl font-bold text-white'>
                    @youraccount
                  </span>
                  <span className='text-gray-400 text-sm'>
                    Join 50K+ followers
                  </span>
                </div>
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className='group relative'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-primary rounded-lg  opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
              <a
                href='#'
                className='relative flex items-center gap-4 px-8 py-6 bg-gray-900 rounded-lg leading-none'
              >
                <div className='flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 transform group-hover:scale-110 transition-transform duration-200'>
                  <Linkedin className='w-8 h-8 text-white' />
                </div>
                <div className='flex flex-col items-start'>
                  <span className='text-blue-400 font-medium'>LinkedIn</span>
                  <span className='text-2xl font-bold text-white'>
                    @youraccount
                  </span>
                  <span className='text-gray-400 text-sm'>Connect with us</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockEngageWithMe;
