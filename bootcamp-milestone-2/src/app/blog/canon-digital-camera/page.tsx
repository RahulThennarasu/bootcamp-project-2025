import Image from "next/image";
import Link from "next/link";

export default function CanonBlog() {
  return (
    <div>
      <main>
        <article className="blog-article">
          <h1 className="page-title">Canon PowerShot SD750</h1>
          
          <p className="post-date">Oct 13, 2025</p>
          
          <div style={{ position: 'relative', width: '100%', maxWidth: '600px', height: '400px', margin: '20px auto' }}>
            <Image 
              src="/images/sd750.JPG" 
              alt="Canon PowerShot SD750" 
              fill
              style={{ objectFit: 'contain' }}
              className="camera-img"
            />
          </div>
          
          <div className="post-content">
            <p>
              Found this camera from some storage room in my house recently. It's from 2007 and honestly, I've been 
              using it more than my phone for taking photos. There's something nice about not having to think 
              too much and its just point and shoot.
            </p>
            
            <p>
              The photos have that early digital look that I love and the pictures come out looking really aesthetic. 
              Been taking it around to capture people, myself, mountains, beaches, the city. 
              It's refreshing to use something simple again.
            </p>
          </div>
          
          <div className="gallery">
            <div style={{ position: 'relative', width: '100%', height: '300px' }}>
              <Image src="/images/mountain_landscape.JPG" alt="Mountain landscape" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'relative', width: '100%', height: '300px' }}>
              <Image src="/images/cabo_arc.JPG" alt="Cabo arch" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'relative', width: '100%', height: '300px' }}>
              <Image src="/images/sfbridge.JPG" alt="SF Bridge" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'relative', width: '100%', height: '300px' }}>
              <Image src="/images/palm_trees.JPG" alt="Palm trees" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          
          <Link href="/blog" className="back-link">← Back to Blog</Link>
        </article>
      </main>
      <footer className="footer">© 2025 Rahul Thennarasu's Personal Website | All Rights Reserved | Made with love ♥</footer>
    </div>
  );
}