import { ReactElement } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

interface LayoutProps {
  children: ReactElement;
  className?: string;
}

function Layout({ children, className }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Ashish Sharma</title>
        <meta
          name='description'
          content="Hi, I'm Ashish Sharma. This is my personal blog where I share my thoughts and learnings."
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <div className={`container max-w-3xl mx-auto px-5 lg:px-0 ${className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
