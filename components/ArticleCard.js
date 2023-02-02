import { Chevron } from './Logos';
import Link from 'next/link';
import Date from './Date';

function ArticleCard({ article }) {
  return (
    <article className='max-w-xl group'>
      <Link href={`blog/${article.slug}`} className='relative'>
        <div className='absolute z-0 transition scale-95 bg-gray-100 opacity-0 dark:bg-gray-800 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl group-hover:scale-100 group-hover:opacity-100' />

        <div className='relative'>
          <Date dateString={article.date} />

          <h2 className='mt-3 text-base font-semibold text-black dark:text-white'>
            {article.title}
          </h2>
          <p className='mt-2 text-sm text-gray-400 dark:text-slate-500'>
            {article.description}
          </p>

          <div className='flex items-center mt-4 text-primary dark:text-primary-dark'>
            <span className='text-sm font-medium'>Read article</span>
            <Chevron />
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ArticleCard;
