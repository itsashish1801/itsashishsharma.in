import { ReactElement } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactElement;
  className?: string;
}

function Layout({ children, className }: LayoutProps) {
  return (
    <div className={`container max-w-3xl mx-auto ${className}`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
