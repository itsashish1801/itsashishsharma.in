import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='antialiased text-black transition duration-500 bg-white dark:bg-gray-900 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
