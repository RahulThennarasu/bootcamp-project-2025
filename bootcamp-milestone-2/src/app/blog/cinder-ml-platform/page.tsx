import Image from "next/image";
import Link from "next/link";

export default function CinderBlog() {
  return (
    <div>
      <main>
        <article className="blog-article">
          <h1 className="page-title">Cinder: What I Learned From Creating an Open-Source ML Platform</h1>
          
          <p className="post-date">Coming Soon</p>
          
          <div style={{ position: 'relative', width: '100%', height: '400px' }}>
            <Image 
              src="/images/cinder-screenshot.png" 
              alt="Screenshot of Cinder ML Analysis Platform" 
              fill
              style={{ objectFit: 'contain' }}
              className="post-image"
            />
          </div>
          
          <div className="post-content">
            <p>
              Deep dive into the technical challenges and architectural decisions behind building 
              a comprehensive ML analysis platform that supports PyTorch, TensorFlow, and scikit-learn.
            </p>
            
            <h2>The Beginning</h2>
            <p>
              Creating Cinder was an ambitious project that started from a simple idea: make machine learning 
              model analysis accessible to everyone.
            </p>
            
            <h2>Technical Challenges</h2>
            <p>
              Building a platform that supports multiple ML frameworks presented unique challenges.
            </p>
            
            <h2>Key Features</h2>
            <ul>
              <li>SHAP feature importance analysis</li>
              <li>Cross-validation support</li>
              <li>Hyperparameter tuning</li>
              <li>React/Node.js architecture</li>
            </ul>
            
            <p>
              <a href="https://www.cinder.digital/" target="_blank">Visit Cinder Platform →</a>
            </p>
          </div>
          
          <Link href="/blog" className="back-link">← Back to Blog</Link>
        </article>
      </main>
    </div>
  );
}