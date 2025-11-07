import Image from "next/image";
import Link from "next/link";

export default function SnowflakeBlog() {
  return (
    <div>
      <main>
        <article className="blog-article">
          <h1 className="page-title">Snowflake Conference @ San Francisco</h1>
          
          <p className="post-date">Sept 27, 2025</p>
          
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Image 
              src="/images/snowflake-conference.JPG" 
              alt="Snowflake Summit 2025 in San Francisco" 
              fill
              style={{ objectFit: 'contain' }}
              className="post-image"
            />
          </div>
          
          <div className="post-content">
            <p>
              I had an awesome time at the Snowflake Summit 2025 in San Francisco. The energy was unreal 
              and it was inspiring to be surrounded by so many people building the future of data.
            </p>
            
            <h2>Key Takeaways</h2>
            <p>
              I loved seeing how Snowflake is growing into a full platform for intelligent applications, 
              and it was cool to watch dbt Labs get recognized for their impact.
            </p>
            
            <h2>Networking</h2>
            <p>
              The best part for me was meeting Thierry Cruanes and Benoit Dageville, along with a bunch 
              of other folks who were open about their journeys and challenges.
            </p>
            
            <h2>Inspiration</h2>
            <p>
              I left the week feeling motivated and excited to bring what I learned back into my own work.
            </p>
          </div>
          
          <Link href="/blog" className="back-link">← Back to Blog</Link>
        </article>
      </main>
    </div>
  );
}