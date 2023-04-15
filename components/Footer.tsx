import Logo from './Logo';

function Footer() {
  return (
    <footer className='pt-24 pb-16'>
      <Logo />
      <p className='mt-4 font-medium md:text-lg'>Thanks for reading.</p>
      <p className='mt-1 text-sm text-gray-500 md:text-base dark:text-slate-500'>
        Copyright &copy; 2023 Ashish Sharma. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
