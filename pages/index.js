import Head from 'next/head';

import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';

import { getBlogPostsData } from '@/lib/articles';

export async function getStaticProps() {
  const allPostsData = (await getBlogPostsData()).slice(0, 5);

  return {
    props: { allPostsData },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Ashish Sharma</title>
        <meta
          name='description'
          content="Hi, I'm Ashish Sharma. This is my personal blog where I share my thoughts and learnings."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <main className='transition duration-500 bg-white dark:bg-gray-900'>
        <Header />
        <Profile />
        <Blogs posts={allPostsData} />
        <Footer />
      </main>
    </>
  );
}
