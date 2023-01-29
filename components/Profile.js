import Image from 'next/image';

import Me from '../assets/me.webp';
import Container from './Container';

function Profile() {
  return (
    <section>
      <Container className='py-16'>
        <Image
          src={Me}
          className='object-cover w-16 h-16 bg-gray-100 rounded-full dark:bg-gray-800'
          alt='Photo of Ashish Sharma'
        />
        <h1>Software designer, founder, and amateur astronaut.</h1>
      </Container>
    </section>
  );
}

export default Profile;
