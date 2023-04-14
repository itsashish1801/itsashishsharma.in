import Image from 'next/image';

import profileImg from '../public/ashish-sharma.webp';
import SocialLinks from './SocialLinks';

function Bio() {
  return (
    <header className='py-16'>
      <Image
        src={profileImg}
        alt='Ashish Sharma portrait image'
        width={64}
        height={64}
        className='rounded-full'
      />

      <div className='max-w-2xl'>
        <h1 className='mt-6 text-4xl font-medium leading-tight tracking-tight md:text-5xl'>
          Intrigued being, Designer &amp; Frontend Engineer.
        </h1>
        <p className='mt-6 leading-relaxed text-gray-500 md:text-lg dark:text-slate-500 md:leading-relaxed'>
          I&apos;m Ashish, I design and code beautifully simple things, and I
          love what I do. Here I write about my ideas and a few things I&apos;ve
          learned, mostly about programming, design, philosophy, and life.
        </p>
      </div>

      <SocialLinks />
    </header>
  );
}

export default Bio;
