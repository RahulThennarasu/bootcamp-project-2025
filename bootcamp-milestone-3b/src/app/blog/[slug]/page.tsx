import Image from "next/image";
import Link from "next/link";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

// Simple function to convert markdown-style headings to HTML
function parseContent(content: string) {
  return content.split('\n\n').map((paragraph: string, index: number) => {
    const trimmed = paragraph.trim();
    
    // Check if it's an H2 heading (##)
    if (trimmed.startsWith('## ')) {
      const text = trimmed.replace('## ', '');
      return <h2 key={index}>{text}</h2>;
    }
    // Check if it's an H3 heading (###)
    if (trimmed.startsWith('### ')) {
      const text = trimmed.replace('### ', '');
      return <h3 key={index}>{text}</h3>;
    }
    // Regular paragraph
    return <p key={index}>{trimmed}</p>;
  });
}

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
            
            {/* Parse and render content with markdown headings */}
            {parseContent(blog.content)}
          </div>
          
          <Link href="/blog" className="back-link">← Back to Blog</Link>
        </article>
      </main>
    </div>
  );
}