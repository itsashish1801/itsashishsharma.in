import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPostSlugs, getPostData } from '@/lib/articles';
import Head from 'next/head';

export async function getStaticPaths() {
  const paths = await getAllPostSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);

  return {
    props: {
      ...postData,
    },
  };
}

function BlogPost({ code, frontmatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name='description' content={frontmatter.description} />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <main>
        <article></article>
      </main>
    </>
  );
}

export default BlogPost;
