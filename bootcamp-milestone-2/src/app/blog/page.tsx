import BlogPreview from '@/components/blogPreview';
import blogs from '@/app/blogData';

export default function BlogPage() {
  return (
    <div>
      <main>
        <h1 className="page-title">Blog</h1>
        <p className="blog-intro">
          Welcome to my digital space where I share insights, project breakdowns, and thoughts on technology, AI, and software engineering.
        </p>
        <div className="blog-container">
          {blogs.map((blog, index) => (
            <BlogPreview key={blog.slug} {...blog} />
          ))}
        </div>
      </main>
    </div>
  );
}