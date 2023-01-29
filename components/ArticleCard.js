import { Chevron } from './Logos';

function ArticleCard() {
  return (
    <article className='max-w-xl group'>
      <a href='#' className='relative'>
        <div className='absolute z-0 transition scale-95 bg-gray-100 opacity-0 dark:bg-gray-800 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl group-hover:scale-100 group-hover:opacity-100' />

        <div className='relative'>
          <time className='flex items-center gap-3.5' dateTime='2023-01-30'>
            <div className='h-4 w-0.5 rounded-full bg-gray-350 opacity-60 dark:bg-slate-600' />
            <span className='text-sm text-gray-350 dark:text-slate-600'>
              January 30, 2023
            </span>
          </time>

          <h2 className='mt-3 text-base font-semibold text-black dark:text-white'>
            Crafting a design system for a multiplanetary future
          </h2>
          <p className='mt-2 text-sm text-gray-400 dark:text-slate-500'>
            Most companies try to stay ahead of the curve when it comes to
            visual design, but for Planetaria we needed to create a brand that
            would still inspire us 100 years from now when humanity has spread
            across our entire solar system.
          </p>

          <div className='flex items-center mt-4 text-primary dark:text-primary-dark'>
            <span className='text-sm font-medium'>Read article</span>
            <Chevron />
          </div>
        </div>
      </a>
    </article>
  );
}

export default ArticleCard;
