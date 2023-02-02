import Image from 'next/image';

import Me from '../assets/me.webp';
import Container from './Container';
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './Logos';

function Profile() {
  return (
    <section>
      <Container className='py-16'>
        <Image
          src={Me}
          className='object-cover w-16 h-16 bg-gray-100 rounded-full dark:bg-gray-800'
          alt='Photo of Ashish Sharma'
        />

        <h1 className='mt-6 text-4xl font-bold tracking-tight text-black sm:text-5xl dark:text-white'>
          Intrigued being, Designer &amp; Frontend Engineer.
        </h1>
        <p className='mt-6 text-base text-gray-400 dark:text-slate-500'>
          I&apos;m Ashish, I design and code beautifully simple things, and I
          love what I do. Here I write about my ideas and things I&apos;ve
          learned, mostly about programming, design, philosophy, and life.
        </p>

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
      </Container>
    </section>
  );
}

export default Profile;
