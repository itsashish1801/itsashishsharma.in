import { parseISO, format } from 'date-fns';

function Date({ dateString }) {
  const date = parseISO(dateString);

  return (
    <time
      dateTime={dateString}
      className='text-sm text-gray-350 dark:text-slate-600'
    >
      {format(date, 'LLLL d, yyyy')}
    </time>
  );
}

export default Date;
