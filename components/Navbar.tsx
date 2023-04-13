import Logo from './Logo';
import ThemeToggler from './ThemeToggler';

function Navbar() {
  return (
    <div className='py-9 lg:py-12'>
      <nav className='flex items-center justify-between'>
        <Logo />
        <ThemeToggler />
      </nav>
    </div>
  );
}

export default Navbar;
