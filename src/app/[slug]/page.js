import React from 'react';

import { createClient } from '@/prismicio';
import SwitchComponent from '@/app/components/SwitchComponent';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const client = createClient();

  const page = await client.getByUID('pages', slug);
  const data = page.data;

  return {
    title: data.meta_title,
    description: data.meta_description,
    keywords: data.keywords.map((item) => item.title),
    openGraph: {
      title: data.meta_title,
      description: data.meta_description,
      images: [
        {
          url: data.meta_image.url,
          width: 1200,
          height: 630,
          alt: data.meta_title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.meta_title,
      description: data.meta_description,
      images: [data.meta_image.url],
    },
  };
}

const Home = async ({ params }) => {
  const client = createClient();

  const { slug } = await params;
  console.log(slug);

  const page = await client.getByUID('pages', slug);

  if (!page) {
    return notFound();
  }

  console.log(page.data.slices);

  return <SwitchComponent page={page} />;
};

export default Home;
