import Link from 'next/link';
import { LogoBlack, LogoWhite } from './Icons';

function Logo() {
  return (
    <Link
      href='/'
      className='block relative h-10 w-[120px]'
      aria-label='Logo reading Ashish Sharma in cursive form'
    >
      <div className='absolute inset-0 w-full h-auto transition duration-500 opacity-100 dark:opacity-0'>
        <LogoBlack />
      </div>
      <div className='absolute inset-0 w-full h-auto transition duration-500 opacity-0 dark:opacity-100'>
        <LogoWhite />
      </div>
    </Link>
  );
}

export default Logo;
