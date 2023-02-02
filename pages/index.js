import Head from 'next/head';

import Profile from '@/components/Profile';
import Blogs from '@/components/Blogs';

import { getBlogPostsData } from '@/lib/articles';
import Layout from '@/components/Layout';

export async function getStaticProps() {
  const allPostsData = (await getBlogPostsData()).slice(0, 5);

  return {
    props: { allPostsData },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Ashish Sharma</title>
        <meta
          name='description'
          content="Hi, I'm Ashish Sharma. This is my personal blog where I share my thoughts and learnings."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <Profile />
      <Blogs posts={allPostsData} />
    </Layout>
  );
}
