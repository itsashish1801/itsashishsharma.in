import { useTheme } from 'next-themes';

import { Logo, LogoDark, SunIcon } from './Logos';
import Link from 'next/link';
import Container from './Container';

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header>
      <Container>
        <nav className='flex items-center justify-between py-9'>
          <Link href={'/'}>
            <Logo className='h-12 w-auto dark:hidden' />
            <LogoDark className='h-12 w-auto hidden dark:block' />
          </Link>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='inline-flex items-center justify-center p-2 border-2 border-gray-200 rounded-full hover:border-black dark:border-white'
          >
            <SunIcon className='h-6 w-6' />
          </button>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
