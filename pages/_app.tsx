import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/prose.css';

import Layout from '@/components/Layout';

import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';

const matter = localFont({
  src: [
    {
      path: '../public/fonts/Matter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Matter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-matter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Layout className={`${matter.variable} font-sans`}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
