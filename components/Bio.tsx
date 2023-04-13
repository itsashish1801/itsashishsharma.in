import Image from 'next/image';

import profileImg from '../public/ashish-sharma.webp';
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './Icons';

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
        <h2 className='mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl'>
          Intrigued being, Designer &amp; Frontend Engineer.
        </h2>
        <p className='mt-6 text-base leading-relaxed text-gray-500 dark:text-slate-500'>
          I&apos;m Ashish, I design and code beautifully simple things, and I
          love what I do. Here I write about my ideas and a few things I&apos;ve
          learned, mostly about programming, design, philosophy, and life.
        </p>
      </div>

      <div className='flex gap-6 mt-6'>
        <a href='https://twitter.com/itsashish1801' className='group'>
          <TwitterIcon />
        </a>
        <a href='https://www.instagram.com/itsashish1801' className='group'>
          <InstagramIcon />
        </a>
        <a href='https://github.com/itsashish1801' className='group'>
          <GithubIcon />
        </a>
        <a href='https://www.linkedin.com/in/itsashish1801' className='group'>
          <LinkedinIcon />
        </a>
      </div>
    </header>
  );
}

export default Bio;
