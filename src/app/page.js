import React from 'react';
import { createClient } from '@/prismicio';
import SwitchComponent from '@/app/components/SwitchComponent';

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getByUID('pages', 'home');
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
const Home = async () => {
  const client = createClient();

  const page = await client.getByUID('pages', 'home');
  const global = await client.getSingle('global');

  return <SwitchComponent page={page} global={global} />;
};

export default Home;
