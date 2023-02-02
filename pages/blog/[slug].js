import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPostSlugs, getPostData } from '@/lib/articles';
import { useMemo } from 'react';

function BlogPost({ code, frontmatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <article className='' itemScope itemType='http://schema.org/Article'>
      <header>
        <h1 itemProp='headline'>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
      </header>
      <section
        itemProp='articleBody'
        className='mx-auto my-4 prose md:prose-lg lg:prose-xl'
      >
        <Component />
      </section>
    </article>
  );
}

export default BlogPost;

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
