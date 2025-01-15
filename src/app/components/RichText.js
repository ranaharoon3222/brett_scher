import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const RichTextComponent = ({
  content,
  paraClass,
  headingClass = 'text-4xl font-bold my-4',
  heading2Class = 'text-3xl font-semibold my-3',
  heading3Class = 'text-2xl font-semibold my-2',
}) => {
  const serialize = (type, element, children) => {
    switch (type) {
      case 'heading1':
        return <h1 className={headingClass}>{children}</h1>;
      case 'heading2':
        return <h2 className={heading2Class}>{children}</h2>;
      case 'heading3':
        return <h3 className={heading3Class}>{children}</h3>;
      case 'heading4':
        return <h4 className='text-xl font-semibold my-2'>{children}</h4>;
      case 'heading5':
        return <h5 className='text-lg font-semibold my-1'>{children}</h5>;
      case 'heading6':
        return <h6 className='text-base font-semibold my-1'>{children}</h6>;
      case 'paragraph':
        return <p className={paraClass}>{children}</p>;
      case 'image':
        return (
          <img
            className='my-4 rounded-lg shadow-lg'
            src={element.url}
            alt={element.alt || ''}
          />
        );
      case 'list-item':
        return <li className='list-disc list-inside my-1'>{children}</li>;
      case 'ordered-list':
        return <ol className='list-decimal list-inside my-2'>{children}</ol>;
      case 'unordered-list':
        return <ul className='list-disc list-inside my-2'>{children}</ul>;
      case 'quote':
        return (
          <blockquote className='border-l-4 border-gray-300 pl-4 italic my-4'>
            {children}
          </blockquote>
        );
      case 'strong':
        return <strong className='font-bold'>{children}</strong>;
      case 'em':
        return <em className='italic'>{children}</em>;
      case 'link':
        return (
          <a
            className='text-blue-500 hover:underline'
            href={element.data.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            {children}
          </a>
        );
      case 'embed':
        return (
          <div className='my-4'>
            <iframe
              className='w-full h-96'
              src={element.url}
              frameBorder='0'
              allowFullScreen
              title='Embedded Content'
            />
          </div>
        );
      // Add more cases as needed
      default:
        return null;
    }
  };

  return (
    <div className='prose lg:prose-xl'>
      <PrismicRichText field={content} components={serialize} />
    </div>
  );
};

export default RichTextComponent;
