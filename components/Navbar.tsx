import Logo from './Logo';
import ThemeToggler from './ThemeToggler';

function Navbar() {
  return (
    <div className='px-5 py-9 lg:py-12 lg:px-0'>
      <nav className='flex items-center justify-between'>
        <Logo />
        <ThemeToggler />
      </nav>
    </div>
  );
}

export default Navbar;
