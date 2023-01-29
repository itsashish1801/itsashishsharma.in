import ArticleCard from './ArticleCard';
import Container from './Container';

function Blogs() {
  return (
    <section>
      <Container className='py-8'>
        <h2 className='font-medium tracking-wider uppercase text-secondary dark:text-secondary-dark'>
          Recently Published
        </h2>
        <div className='mt-6'>
          <ArticleCard />
        </div>
      </Container>
    </section>
  );
}

export default Blogs;
