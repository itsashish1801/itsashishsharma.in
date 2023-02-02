import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPostSlugs, getPostData } from '@/lib/articles';

import Head from 'next/head';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Date from '@/components/Date';
import Image from 'next/image';

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
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name='description' content={frontmatter.description} />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <article itemScope itemType='http://schema.org/Article'>
        <Container className='py-16'>
          {/* <Link href={'/'}>Back to Overview</Link> */}

          <header>
            <Date dateString={frontmatter.date} className='text-[16px]' />
            <h1
              itemProp='headline'
              className='mt-6 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl'
            >
              {frontmatter.title}
            </h1>
          </header>

          <section
            itemProp='articleBody'
            className='mt-8 prose dark:prose-invert'
          >
            <Image
              src={frontmatter.banner}
              alt='Image'
              width={736}
              height={420}
            />
            <Component />
          </section>
        </Container>
      </article>
    </Layout>
  );
}

export default BlogPost;
