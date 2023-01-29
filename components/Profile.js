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
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className='mt-6 text-base text-gray-400 dark:text-slate-500'>
          I&apos;m Spencer, a software designer and entrepreneur based in New
          York City. I&apos;m the founder and CEO of Planetaria, where we
          develop technologies that empower regular people to explore space on
          their own terms.
        </p>

        <div className='flex gap-6 mt-6'>
          <a href='#' className='group'>
            <TwitterIcon />
          </a>
          <a href='#' className='group'>
            <InstagramIcon />
          </a>
          <a href='#' className='group'>
            <GithubIcon />
          </a>
          <a href='#' className='group'>
            <LinkedinIcon />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Profile;
