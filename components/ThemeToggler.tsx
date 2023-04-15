import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { MoonIcon, SunIcon } from './Icons';

function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className='w-12 h-12 border-2 rounded-full' />;

  return (
    <button
      onClick={() => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
      }}
      aria-label='Toggle theme'
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
  );
}

export default ThemeToggler;
