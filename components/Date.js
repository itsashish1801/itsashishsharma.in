import clsx from 'clsx';
import { parseISO, format } from 'date-fns';

function Date({ dateString, className }) {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString} className='flex items-center gap-3.5'>
      <div className='h-4 w-0.5 rounded-full bg-gray-350 opacity-60 dark:bg-slate-600' />
      <span
        className={clsx('text-sm text-gray-350 dark:text-slate-600', className)}
      >
        {format(date, 'LLLL d, yyyy')}
      </span>
    </time>
  );
}

export default Date;
