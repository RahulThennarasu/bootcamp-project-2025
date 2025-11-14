"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { IComment } from "@/database/blogSchema";
import Comment from "@/components/comment";
import { useParams } from "next/navigation";

type BlogData = {
  title: string;
  slug: string;
  date: string;
  description: string;
  content: string;
  image: string;
  image_alt: string;
  comments: IComment[];
};

// Simple function to convert markdown-style headings to HTML
function parseContent(content: string) {
  return content.split('\n\n').map((paragraph: string, index: number) => {
    if (paragraph.startsWith('## ')) {
      const text = paragraph.replace('## ', '');
      return <h2 key={index}>{text}</h2>;
    }
    if (paragraph.startsWith('### ')) {
      const text = paragraph.replace('### ', '');
      return <h3 key={index}>{text}</h3>;
    }
    return <p key={index}>{paragraph}</p>;
  });
}

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [commentForm, setCommentForm] = useState({ user: "", comment: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch blog data
  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`/api/blogs/${slug}`);
        if (!response.ok) {
          throw new Error("Blog not found");
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [slug]);

  // Handle comment submission
  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`/api/blogs/${slug}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentForm),
      });

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }

      const data = await response.json();
      
      // Add the new comment to the blog state
      if (blog) {
        setBlog({
          ...blog,
          comments: [...blog.comments, data.comment],
        });
      }

      // Reset form and show success message
      setCommentForm({ user: "", comment: "" });
      setSuccess("Comment added successfully!");
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Failed to add comment. Please try again.");
      console.error("Error adding comment:", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
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
            {parseContent(blog.content)}
          </div>

          {/* Comments Section */}
          <div className="comments-section">
            <h2>Comments ({blog.comments?.length || 0})</h2>
            
            {/* Comment Form */}
            <form onSubmit={handleSubmitComment} style={{ marginBottom: '2rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="user">Name:</label>
                <input
                  type="text"
                  id="user"
                  value={commentForm.user}
                  onChange={(e) => setCommentForm({ ...commentForm, user: e.target.value })}
                  required
                  disabled={submitting}
                  style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="comment">Comment:</label>
                <textarea
                  id="comment"
                  value={commentForm.comment}
                  onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
                  required
                  disabled={submitting}
                  rows={4}
                  style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                />
              </div>
              
              <button type="submit" disabled={submitting}>
                {submitting ? "Submitting..." : "Add Comment"}
              </button>
              
              {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
              {success && <p style={{ color: 'green', marginTop: '0.5rem' }}>{success}</p>}
            </form>

            {/* Display Comments */}
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