import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './Icons';

function SocialLinks() {
  return (
    <div className='flex gap-6 mt-6'>
      <a
        href='https://twitter.com/itsashish1801'
        aria-label='Twitter account'
        className='group'
      >
        <TwitterIcon />
      </a>
      <a
        href='https://www.instagram.com/itsashish1801'
        aria-label='Instagram account'
        className='group'
      >
        <InstagramIcon />
      </a>
      <a
        href='https://github.com/itsashish1801'
        aria-label='Github account'
        className='group'
      >
        <GithubIcon />
      </a>
      <a
        href='https://www.linkedin.com/in/itsashish1801'
        aria-label='Linkedin account'
        className='group'
      >
        <LinkedinIcon />
      </a>
    </div>
  );
}

export default SocialLinks;
