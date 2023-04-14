import Link from 'next/link';
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';

import { getAllPostSlugs, getPostData } from '@/lib/posts';

import { Frontmatter } from '@/interfaces/blog';

import { ArrowLeft } from '@/components/Icons';
import Image from 'next/image';

interface BlogProps {
  code: string;
  frontmatter: Frontmatter;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string);
  return {
    props: {
      ...postData,
    },
  };
};

function Blog({ frontmatter, code }: BlogProps) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <article itemScope itemType='http://schema.org/Article'>
      <Link
        href='/'
        className='flex items-center mt-24 mb-10 space-x-4 focus:outline-none group lg:mb-24'
      >
        <span>
          <ArrowLeft />
        </span>
        <span className='text-lg font-semibold'>Back to overview</span>
      </Link>

      <header>
        <div>
          <h1
            itemProp='headline'
            className='text-3xl font-medium leading-tight md:text-4xl'
          >
            {frontmatter.title}
          </h1>
          <p className='mt-2 text-lg font-semibold text-gray-400 dark:text-slate-500'>
            11 min read
          </p>
        </div>

        <div className='mt-10 aspect-h-4 aspect-w-3 md:aspect-w-3 md:aspect-h-2'>
          <Image
            priority
            src={frontmatter.banner}
            fill
            alt={frontmatter.bannerAlt}
            className='object-cover object-center transition-opacity rounded-lg'
          />
        </div>
      </header>

      <main className='prose dark:prose-invert lg:mt-24' itemProp='articleBody'>
        <Component />
      </main>
    </article>
  );
}

export default Blog;
