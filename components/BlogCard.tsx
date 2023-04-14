import Link from 'next/link';

import { BlogCardProps } from '@/interfaces/blog';

import Date from './Date';
import { Chevron } from './Icons';

function BlogCard({ slug, title, description, date }: BlogCardProps) {
  return (
    <article className='max-w-xl group'>
      <Link href={`blog/${slug}`} className='relative block'>
        <div className='absolute z-0 block transition scale-95 bg-gray-100 opacity-0 dark:bg-gray-800 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-lg group-hover:scale-100 group-hover:opacity-100' />

        <div className='relative'>
          <Date dateString={date} />

          <h2 className='mt-3 font-semibold'>{title}</h2>
          <p className='mt-2 text-sm leading-relaxed text-gray-500 dark:text-slate-500'>
            {description}
          </p>

          <div className='flex items-center mt-4 text-primary'>
            <span className='text-sm font-medium'>Read article</span>
            <Chevron />
          </div>
        </div>
      </Link>
    </article>
  );
}

export default BlogCard;
