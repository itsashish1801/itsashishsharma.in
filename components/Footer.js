import Link from 'next/link';
import Container from './Container';
import { Logo, LogoDark } from './Logos';

function Footer() {
  return (
    <footer>
      <Container className='py-16'>
        <Link href={'/'} className='h-10 w-[120px] relative block'>
          <Logo className='absolute inset-0 w-full h-auto transition duration-500 opacity-100 dark:opacity-0' />
          <LogoDark className='absolute inset-0 w-full h-auto transition duration-500 opacity-0 dark:opacity-100' />
        </Link>
        <p className='mt-4 text-sm text-black dark:text-white'>
          Thanks for reading!
        </p>
        <p className='mt-1 text-xs text-gray-400 dark:text-slate-500'>
          All rights reserved © Ashish Sharma 2023
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
