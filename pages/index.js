import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashish Sharma</title>
        <meta
          name='description'
          content="Hi, I'm Ashish Sharma. This is my personal blog where I share my thoughts and learnings."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main></main>
    </>
  );
}
