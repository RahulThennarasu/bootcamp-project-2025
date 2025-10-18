import Image from "next/image";
import Link from "next/link";

export default function CanonBlog() {
  return (
    <div>
      <main>
        <article className="blog-article">
          <h1 className="page-title">Canon PowerShot SD750</h1>
          
          <p className="post-date">Oct 13, 2025</p>
          
          <Image 
            src="/images/sd750.JPG" 
            alt="Canon PowerShot SD750" 
            width={600}
            height={400}
            className="camera-img"
          />
          
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
            <Image src="/images/mountain_landscape.JPG" alt="Mountain landscape" width={400} height={300} />
            <Image src="/images/cabo_arc.JPG" alt="Cabo arch" width={400} height={300} />
            <Image src="/images/sfbridge.JPG" alt="SF Bridge" width={400} height={300} />
            <Image src="/images/palm_trees.JPG" alt="Palm trees" width={400} height={300} />
          </div>
          
          <Link href="/blog" className="back-link">← Back to Blog</Link>
        </article>
      </main>
      <footer className="footer">© 2025 Rahul Thennarasu's Personal Website | All Rights Reserved | Made with love ♥</footer>
    </div>
  );
}