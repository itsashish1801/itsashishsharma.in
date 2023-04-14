import { BlogCardProps } from '@/interfaces/blog';

import BlogCard from './BlogCard';

function Blogs({ blogs }: { blogs: BlogCardProps[] }) {
  return (
    <section className='py-8'>
      <h3 className='font-medium tracking-wider uppercase text-primary'>
        Recently Published
      </h3>

      <div className='flex flex-col gap-16 mt-10'>
        {blogs.map((blog) => (
          <BlogCard
            key={blog.date}
            slug={blog.slug}
            date={blog.date}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Blogs;
