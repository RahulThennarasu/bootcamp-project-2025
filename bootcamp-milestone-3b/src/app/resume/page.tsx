export default function Resume() {
  return (
    <div>
      <main>
        <h1 className="page-title">Resume</h1>
        <div className="download-resume-container">
          <a href="/resume-PDF/rahulthennarasu_resume.pdf" download>Download Resume</a>
        </div>
        <div className="resume">
          {/* Education */}
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="entry">
              <h3 className="entry-title">California Polytechnic State University - San Luis Obispo</h3>
              <p className="entry-info">B.S. Computer Science | 2025 – 2028 | San Luis Obispo, CA</p>
            </div>
          </section>

          {/* Experience */}
          <section className="section">
            <h2 className="section-title">Experience</h2>
            <div className="entry">
              <h3 className="entry-title">Software Engineer Intern</h3>
              <p className="entry-info">airah.ai | July 2024 – Aug 2024 | Cupertino, CA</p>
              <ul className="entry-description">
                <li>Built scalable Flask backend with MongoDB for healthcare AI chatbot, implementing RAG pipeline with PDF text extraction, chunking, and semantic search using Google embeddings.</li>
                <li>Developed retrieval system with cosine similarity and MongoDB caching to reduce query response times.</li>
                <li>Implemented JWT authentication and K-means clustering on question embeddings; collaborated with Stanford oncologists on patient interaction optimization.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="section">
            <h2 className="section-title">Projects</h2>
            <div className="entry">
              <h3 className="entry-title">Cinder ML Platform</h3>
              <p className="entry-info">Founder | Jun 2025 – Present</p>
              <ul className="entry-description">
                <li>Open-source ML model analysis platform published on PyPI (pip install cinder-ml) and deployed at cinder.digital.</li>
                <li>Supports PyTorch, TensorFlow, and scikit-learn with React/Node.js architecture.</li>
                <li>Includes SHAP feature importance, cross-validation, and hyperparameter tuning.</li>
              </ul>
            </div>

            <div className="entry">
              <h3 className="entry-title">Wildfire Rescue Rover</h3>
              <p className="entry-info">MakerHacks – Best Use of AI | Feb 2025 | San Francisco, CA</p>
              <ul className="entry-description">
                <li>Engineered autonomous rover with ESP32, thermal sensors, and radar for real-time obstacle detection in hazardous environments.</li>
                <li>Achieved 92% navigation accuracy using Python control algorithms and C++ firmware.</li>
              </ul>
            </div>

            <div className="entry">
              <h3 className="entry-title">Veritas Fact-Checking Platform</h3>
              <p className="entry-info">Hackabyte – 2nd Overall | Feb 2025 | Sunnyvale, CA</p>
              <ul className="entry-description">
                <li>Built real-time fact-checking platform with Flask, MongoDB, Google Gemini AI, and deployed at veritas-sooty.vercel.app.</li>
                <li>Integrated Google Search API for evidence sourcing and React frontend for user interaction.</li>
              </ul>
            </div>

            <div className="entry">
              <h3 className="entry-title">Object Recognition for Visually Impaired</h3>
              <p className="entry-info">MateoHacks – Best Solo Hack | Mar 2024 | San Mateo, CA</p>
              <ul className="entry-description">
                <li>Achieved 95% real-time object recognition accuracy using ResNet-50 and KNN.</li>
                <li>Integrated OpenCV, OCR, and Google Cloud Speech API for visual-to-audio conversion.</li>
              </ul>
            </div>

            <div className="entry">
              <h3 className="entry-title">ASL Translation System</h3>
              <p className="entry-info">PioneerHacks – 1st Overall | Feb 2024 | Sunnyvale, CA</p>
              <ul className="entry-description">
                <li>Developed real-time ASL-to-text translation with 96% accuracy across 200+ signs.</li>
                <li>Implemented with MediaPipe hand tracking and custom neural networks.</li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="section">
            <h2 className="section-title">Skills</h2>
            <ul className="skill-list">
              <li><strong>Languages:</strong> Python, Java, C++, JavaScript, HTML, CSS, TypeScript, SQL, PostgreSQL, MongoDB</li>
              <li><strong>Tools:</strong> Git, Linux, Docker</li>
              <li><strong>Technologies:</strong> LLMs, ML, RAG, AWS, Azure, Django, Flask, FastAPI, React, Next.js</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}