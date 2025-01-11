'use client';

import React, { useState } from 'react';
import { Mail, Phone, Send, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    source: '',
    message: '',
  });

  const subjects = [
    'General Inquiry',
    'Business Proposal',
    'Support',
    'Partnership',
    'Other',
  ];

  const sources = [
    'Search Engine',
    'Social Media',
    'Referral',
    'Advertisement',
    'Other',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Info Section */}
          <div className='space-y-8'>
            <div>
              <h1 className='text-4xl font-bold text-gray-900 mb-2'>
                Get in Touch
              </h1>
              <div className='w-20 h-1 bg-primary rounded'></div>
              <p className='mt-4 text-lg text-gray-600'>
                Have a question or want to work together? Drop us a message!
              </p>
            </div>

            <div className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <div className='flex-shrink-0'>
                  <div className='p-4 bg-primary/30 rounded-lg'>
                    <Mail className='w-6 h-6 text-primary' />
                  </div>
                </div>
                <div>
                  <p className='text-sm font-medium text-gray-900'>Email</p>
                  <p className='text-sm text-gray-600'>contact@company.com</p>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='flex-shrink-0'>
                  <div className='p-4 bg-primary/30 rounded-lg'>
                    <Phone className='w-6 h-6 text-primary' />
                  </div>
                </div>
                <div>
                  <p className='text-sm font-medium text-gray-900'>Phone</p>
                  <p className='text-sm text-gray-600'>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className='pt-8'>
              <div className='flex space-x-6'>
                <a
                  href='https://www.linkedin.com/in/brettscher'
                  className='text-gray-600 hover:text-primary transition-colors'
                >
                  <Linkedin className='w-6 h-6' />
                </a>
                <a
                  href='https://www.instagram.com/brettscherlife'
                  className='text-gray-600 hover:text-primary transition-colors'
                >
                  <Instagram className='w-6 h-6' />
                </a>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className='bg-white rounded-2xl shadow-xl p-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='firstName'
                    className='block text-sm font-medium text-gray-700'
                  >
                    First Name
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className='mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
                    placeholder='John'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='lastName'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Last Name
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className='mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
                    placeholder='Doe'
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700'
                >
                  Subject
                </label>
                <select
                  id='subject'
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className='mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
                  required
                >
                  <option value=''>Select a subject</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className='mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
                  placeholder='john@example.com'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700'
                >
                  Phone
                </label>
                <input
                  type='tel'
                  id='phone'
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className='mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
                  placeholder='+1 (555) 123-4567'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='source'
                  className='block text-sm font-medium text-gray-700'
                >
                  How did you hear about us?
                </label>
                <select
                  id='source'
                  value={formData.source}
                  onChange={(e) =>
                    setFormData({ ...formData, source: e.target.value })
                  }
                  className='mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
                  required
                >
                  <option value=''>Select an option</option>
                  {sources.map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className='mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none'
                  placeholder='Your message here...'
                  required
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors'
              >
                <Send className='w-5 h-5' />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
