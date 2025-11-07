import Image from "next/image";
import Link from "next/link";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  await connectDB();

  try {
    const blog = await Blog.findOne({ slug }).orFail();
    return blog;
  } catch (err) {
    return null;
  }
}

export default async function BlogPost({ params }: Props) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <main>
        <article className="blog-article">
          <h1 className="page-title">{blog.title}</h1>
          
          <p className="post-date">
            {new Date(blog.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          
          <div style={{ position: 'relative', width: '100%', height: '400px' }}>
            <Image 
              src={blog.image}
              alt={blog.image_alt}
              fill
              style={{ objectFit: 'contain' }}
              className="post-image"
            />
          </div>
          
          <div className="post-content">
            <p>{blog.description}</p>
            
            {/* Render the full content - split by newlines and create paragraphs */}
            {blog.content.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <Link href="/blog" className="back-link">← Back to Blog</Link>
        </article>
      </main>
    </div>
  );
}