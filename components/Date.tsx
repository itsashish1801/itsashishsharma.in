import { parseISO, format } from 'date-fns';

interface DateProps {
  dateString: string;
  className?: string;
}

function Date({ dateString, className }: DateProps) {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString} className='flex items-center gap-3.5'>
      <div className='h-4 w-0.5 rounded-full bg-gray-500 opacity-60 dark:bg-slate-500' />
      <span className={`text-sm text-gray-500 dark:text-slate-500`}>
        {format(date, 'LLLL d, yyyy')}
      </span>
    </time>
  );
}

export default Date;
