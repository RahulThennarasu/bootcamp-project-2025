import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div>
      <main>
        <h1 className="page-title">Portfolio</h1>
        <div className="project">
          <Link href="https://www.cinder.digital/" target="_blank">
            <Image 
              src="/images/cinder-screenshot.png" 
              alt="Screenshot of Cinder ML Analysis Platform" 
              width={464} 
              height={260}
            />
          </Link>
          <div className="project-details">
            <p className="project-name"><strong>Cinder - ML Model Analysis Platform</strong></p>
            <p className="project-description">
              Open-source machine learning model analysis platform supporting PyTorch, TensorFlow, and scikit-learn. 
              Built with React/Node.js architecture and published on PyPI. Includes ML debugging suite with SHAP feature 
              importance and hyperparameter tuning.
            </p>
            <Link href="https://www.cinder.digital/" target="_blank">Visit Cinder</Link>
          </div>
        </div>

        <div className="project">
          <Link href="https://docs.google.com/presentation/d/1YRAZuUwB86r1T1J_lE071m-YjBG96SUfaj60-OrYEQs/edit?slide=id.ga073618e60_0_16#slide=id.ga073618e60_0_16" target="_blank">
            <Image 
              src="/images/presentation-screenshot.png" 
              alt="Project presentation slides" 
              width={632} 
              height={364}
            />
          </Link>
          <div className="project-details">
            <p className="project-name"><strong>DeafLink</strong></p>
            <p className="project-description">
              Comprehensive presentation showcasing technical projects, hackathon wins, and development achievements. 
              Demonstrates problem-solving approach and project outcomes across multiple competitions.
            </p>
            <Link href="https://docs.google.com/presentation/d/1YRAZuUwB86r1T1J_lE071m-YjBG96SUfaj60-OrYEQs/edit?slide=id.ga073618e60_0_16#slide=id.ga073618e60_0_16" target="_blank">
              View Presentation
            </Link>
          </div>
        </div>

        <div className="project">
          <Link href="https://github.com/RahulThennarasu/veritas-github" target="_blank">
            <Image 
              src="/images/veritas.png" 
              alt="Screenshot of Veritas Platform" 
              width={464} 
              height={100}
            />
          </Link>
          <div className="project-details">
            <p className="project-name"><strong>Veritas - Real-time AI Fact Checking Platform</strong></p>
            <p className="project-description">
              Veritas scans statements and automatically identifies false or misleading information by cross-referencing 
              multiple trusted sources. Catch misinformation before it spreads.
            </p>
            <Link href="https://veritas-sooty.vercel.app/" target="_blank">Visit Veritas</Link>
          </div>
        </div>

        <div className="project">
          <Link href="https://rahulthennarasu.github.io/dataGuard/" target="_blank">
            <Image 
              src="/images/data_guard.png" 
              alt="Screenshot of DataGuard Platform" 
              width={464} 
              height={100}
            />
          </Link>
          <div className="project-details">
            <p className="project-name"><strong>DataGuard - Your Trusted Guardian of Privacy</strong></p>
            <p className="project-description">
              DataGuard allows you to upload and store essential documents such as licenses, certifications, contracts, 
              and more with peace of mind. With end-to-end encryption and robust security features, DataGuard ensures 
              that your documents remain confidential and protected from unauthorized access.
            </p>
            <Link href="https://rahulthennarasu.github.io/dataGuard/" target="_blank">Visit DataGuard</Link>
          </div>
        </div>

        <div className="project">
          <Link href="/">
            <Image 
              src="/images/website-screenshot.png" 
              alt="Screenshot of Rahul Thennarasu's personal website" 
              width={400} 
              height={300}
            />
          </Link>
          <div className="project-details">
            <p className="project-name">Personal Portfolio Website</p>
            <p className="project-description">
              My personal website built with HTML and CSS showcasing my background, projects, and contact information. 
              Features clean navigation, semantic HTML structure, and professional design.
            </p>
            <Link href="/">Learn More</Link>
          </div>
        </div>
      </main>
    </div>
  );
}