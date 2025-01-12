'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react'; // Importing email icon from Lucide React Icons
import Container from './Container';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Insurance ',
      href: 'https://971j2sm5lzf.typeform.com/to/pY9tLdLf?utm_source=website',
    },
    { label: 'Media', href: 'https://www.crtfd.co/' },
    { label: 'Contact us', href: '/contact' },
  ];

  return (
    <header className='w-full bg-white '>
      <Container className='flex items-center justify-between px-4 py-3'>
        {/* Logo */}
        <div className='text-xl font-bold text-gray-800'>
          <Link href='/'>
            <img src='/logo.jpeg' className='w-28 pl-3' alt='Logo image' />
          </Link>
        </div>

        {/* Menu for larger screens */}
        <nav className='hidden md:flex space-x-10'>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className='text-primary text-xl hover:text-black'
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        {/* <div className='hidden md:flex'>
          <button className='flex items-center px-4 py-2 text-white bg-primary rounded-md hover:bg-opacity-90'>
            <Mail className='mr-2 w-5 h-5' />
            Subscribe
          </button>
        </div> */}

        {/* Mobile CTA Button and Hamburger */}
        {/* <div className='md:hidden flex items-center space-x-4'>
          <button className='flex items-center px-3 py-2 text-white bg-primary rounded-md hover:bg-opacity-90'>
            <Mail className='mr-2 w-5 h-5' />
            Subscribe
          </button>
          <button className='text-gray-700' onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div> */}
      </Container>

      {/* Mobile Menu Overlay */}
      {isOpen && <div className='fixed inset-0 z-40 bg-black bg-opacity-50' />}

      {/* Mobile Menu Canvas */}
      <div
        className={`fixed right-0 top-0 z-50 w-3/4 max-w-sm bg-white shadow-lg h-full transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}
      >
        <button className='p-4 text-gray-700' onClick={() => setIsOpen(false)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        <nav className='p-6 space-y-4'>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className='block text-lg text-gray-700 hover:text-primary'
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
