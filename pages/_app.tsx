import type { AppProps } from 'next/app';
import '@/styles/globals.css';

import Layout from '@/components/Layout';

import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Layout className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
