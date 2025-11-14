import BlogPreview from '@/components/blogPreview';
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

async function getBlogs() {
  await connectDB(); // Connect to database

  try {
    // Query for all blogs and sort by date (newest first)
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // Convert mongoose documents to plain objects
    return blogs;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return null;
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  // Handle case where no blogs are found
  if (!blogs || blogs.length === 0) {
    return (
      <div>
        <main>
          <h1 className="page-title">Blog</h1>
          <p className="blog-intro">No blogs found. Check back soon!</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <main>
        <h1 className="page-title">Blog</h1>
        <p className="blog-intro">
          Welcome to my digital space where I share insights, project breakdowns, and thoughts on technology, AI, and software engineering.
        </p>
        <div className="blog-container">
          {blogs.map((blog) => (
            <BlogPreview 
              key={blog.slug} 
              title={blog.title}
              date={blog.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              description={blog.description}
              image={blog.image}
              imageAlt={blog.image_alt}
              slug={blog.slug}
            />
          ))}
        </div>
      </main>
    </div>
  );
}