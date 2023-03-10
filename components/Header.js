import { useTheme } from 'next-themes';
import Link from 'next/link';

import { Logo, LogoDark, MoonIcon, SunIcon } from './Logos';
import Container from './Container';

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header>
      <Container>
        <nav className='flex items-center justify-between py-9 lg:py-12'>
          <Link href={'/'} className='h-10 w-[120px] relative'>
            <Logo className='absolute inset-0 w-full h-auto transition duration-500 opacity-100 dark:opacity-0' />
            <LogoDark className='absolute inset-0 w-full h-auto transition duration-500 opacity-0 dark:opacity-100' />
          </Link>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='inline-flex items-center justify-center p-2.5 overflow-hidden border-2 border-gray-200 rounded-full hover:border-black focus:border-black focus:outline-none dark:border-gray-600 dark:hover:border-white'
          >
            <div className='relative w-6 h-6'>
              <SunIcon
                className='absolute w-6 h-6 inset-0 text-black transition duration-1000 transform rotate-0 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white'
                style={{ transformOrigin: '50% 100px' }}
              />
              <MoonIcon
                className='absolute w-6 h-6 inset-0 text-black transition duration-1000 transform rotate-90 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white'
                style={{ transformOrigin: '50% 100px' }}
              />
            </div>
          </button>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
