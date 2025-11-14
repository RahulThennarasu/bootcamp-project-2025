import Image from "next/image";
import Link from "next/link";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import type { IBlog } from "@/database/blogSchema";
import Comment from "@/components/comment";
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

// Simple function to convert markdown-style headings to HTML
function parseContent(content: string) {
  return content.split('\n\n').map((paragraph: string, index: number) => {
    // Check if it's an H2 heading (##)
    if (paragraph.startsWith('## ')) {
      const text = paragraph.replace('## ', '');
      return <h2 key={index}>{text}</h2>;
    }
    // Check if it's an H3 heading (###)
    if (paragraph.startsWith('### ')) {
      const text = paragraph.replace('### ', '');
      return <h3 key={index}>{text}</h3>;
    }
    // Regular paragraph
    return <p key={index}>{paragraph}</p>;
  });
}

export default async function BlogPost({ params }: Props) {
  const blog: IBlog | null = await getBlog(params.slug);

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

          {/* Comments Section */}
          <div className="comments-section">
            <h2>Comments ({blog.comments?.length || 0})</h2>
            {!blog.comments || blog.comments.length === 0 ? (
              <p>No comments yet. Be the first to comment!</p>
            ) : (
              <div className="comments-list">
                {blog.comments.map((comment, index) => (
                  <Comment key={index} comment={comment} />
                ))}
              </div>
            )}
          </div>
          
          <Link href="/blog" className="back-link">← Back to Blog</Link>
        </article>
      </main>
    </div>
  );
}