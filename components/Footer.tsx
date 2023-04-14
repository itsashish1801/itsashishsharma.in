import Logo from './Logo';

function Footer() {
  return (
    <footer className='py-16'>
      <Logo />
      <p className='mt-4 font-medium'>Thanks for reading.</p>
      <p className='mt-1 text-sm text-gray-500 dark:text-slate-500'>
        Copyright &copy; 2023 Ashish Sharma. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
