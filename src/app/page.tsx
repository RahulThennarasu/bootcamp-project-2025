import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="page-title">Home</h1>
        <div className="about">
          <div className="about-image">
            <Image 
              src="/images/profile.jpg" 
              alt="Rahul Thennarasu - Computer Science student @ Cal Poly SLO" 
              width={288} 
              height={384}
            />
          </div>
          <div className="about-text">
            <p>
              Welcome! I&apos;m <strong>Rahul Thennarasu</strong>, a first-year <em>Computer Science</em> student at <strong>Cal Poly SLO</strong> 
              with a passion for AI technology.
            </p>
            <p>
              I enjoy tackling challenges at <strong>hackathons</strong>, where I collaborate with friends and strangers 
              to build projects that are fun, helpful, and innovative.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll probably find me playing one of my 
              guitars (my current favorite is <em>classical</em>), exploring indie games, or going on walks with my dog to relax and recharge.
            </p>
            <p>
              Feel free to explore and learn more about me!
            </p>
          </div>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>5+</h3>
            <p>Hackathon Wins</p>
          </div>
          <div className="stat-card">
            <h3>4+</h3>
            <p>Major Projects</p>
          </div>
          <div className="stat-card">
            <h3>1</h3>
            <p>Open Source Package</p>
          </div>
          <div className="stat-card">
            <h3>2025</h3>
            <p>Started at Cal Poly</p>
          </div>
        </div>
      </main>
    </div>
  );
}