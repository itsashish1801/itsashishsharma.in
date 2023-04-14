import { GetStaticProps } from 'next';

import { getBlogPostData } from '@/lib/posts';
import { BlogCardProps } from '@/interfaces/blog';

import Bio from '@/components/Bio';
import Blogs from '@/components/Blogs';
interface PageProps {
  allPostsData: BlogCardProps[];
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getBlogPostData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }: PageProps) {
  return (
    <>
      <Bio />
      <Blogs blogs={allPostsData} />
    </>
  );
}
