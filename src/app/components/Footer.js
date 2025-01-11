'use client';

import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Media', href: 'https://www.crtfd.co/' },
    { label: 'Contact us', href: '/contact' },
  ];

  return (
    <footer className='bg-primary text-white'>
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Logo and Social Section */}
          <div className='space-y-3'>
            <div className=' text-primary relative -left-3  py-2  inline-block font-bold text-xl'>
              <Image src='/blg-logo.png' width={170} height={170} alt='Logo' />
            </div>
            <p className='text-sm opacity-80'>
              Sed ut unde omnis iste natus sit volur antium laudan
            </p>
            <div className='flex gap-4'>
              <a
                href='https://www.instagram.com/brettscherlife'
                className='hover:opacity-80 transition-opacity'
                aria-label='Follow us on Instagram'
              >
                <Instagram size={24} />
              </a>
              <a
                href='https://www.linkedin.com/in/brettscher'
                className='hover:opacity-80 transition-opacity'
                aria-label='Follow us on LinkedIn'
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className='space-y-6'>
            <h2 className='text-xl font-semibold'>Contact</h2>
            <div className='space-y-4'>
              <div className='flex items-start gap-3'>
                <Mail className='w-5 h-5 mt-1 opacity-80' />
                <div>
                  <div className='text-sm opacity-80'>SEND MAIL</div>
                  <a
                    href='mailto:me@brettscher.com'
                    className='hover:underline'
                  >
                    me@brettscher.com
                  </a>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Phone className='w-5 h-5 mt-1 opacity-80' />
                <div>
                  <div className='text-sm opacity-80'>CALL US</div>
                  <a href='tel:631-704-3993' className='hover:underline'>
                    631-704-3993
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Our Pages Section */}
          <div className='space-y-6'>
            <h2 className='text-xl font-semibold'>Our Pages</h2>
            <nav className='space-y-3'>
              {menuItems.map((page) => (
                <Link
                  key={page.label}
                  href={page.href}
                  className='block hover:underline opacity-80 hover:opacity-100 transition-opacity'
                >
                  {page.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className='space-y-6'>
            <h2 className='text-xl font-semibold'>Newsletter</h2>
            <p className='opacity-80'>
              Sed ut unde omnis iste natus sit volur tatem accus antium laudan
              tium exceur sante.
            </p>
            <form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
              <div className='relative'>
                <input
                  type='email'
                  placeholder='Your Email'
                  className='w-full bg-transparent border-b border-white/30 pb-2 placeholder:text-white/50 focus:outline-none focus:border-white/60'
                />
              </div>
              <button
                type='submit'
                className='bg-white text-primary px-8 py-2 rounded hover:bg-white/90 transition-colors'
              >
                Submit
              </button>
            </form>
            <p className='text-sm opacity-60'>Beata vitae dicta explicabo.</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-white/10'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80'>
            <div>© Copyright All rights reserved 2025</div>
            <div className='flex gap-8'>
              <a href='#' className='hover:underline'>
                Privacy Policy
              </a>
              <a href='#' className='hover:underline'>
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
