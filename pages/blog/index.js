import { getBlogPostsData } from '@/lib/articles';
import Link from 'next/link';

function index({ allPostsData }) {
  return (
    <div>
      {allPostsData.map((post) => {
        return (
          <Link key={post.slug} href={`/blog/${post.slug}`} itemProp='url'>
            <article itemScope itemType='http://schema.org/Article'>
              <header>
                <h2 itemProp='headline'>{post.title}</h2>
                <p>{post.date}</p>
              </header>
            </article>
          </Link>
        );
      })}
    </div>
  );
}

export default index;

export async function getStaticProps() {
  const allPostsData = await getBlogPostsData();

  return {
    props: { allPostsData },
  };
}
