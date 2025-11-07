import Image from "next/image";
import Link from "next/link";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

async function getProjects() {
  await connectDB();

  try {
    const projects = await Project.find().orFail();
    return projects;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return (
      <div>
        <main>
          <h1 className="page-title">Portfolio</h1>
          <p>No projects found. Check back soon!</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <main>
        <h1 className="page-title">Portfolio</h1>
        {projects.map((project) => (
          <div key={project.slug} className="project">
            <Link href={project.link || "#"} target="_blank">
              <Image 
                src={project.image}
                alt={project.image_alt}
                width={464} 
                height={260}
              />
            </Link>
            <div className="project-details">
              <p className="project-name"><strong>{project.title}</strong></p>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              {project.link && (
                <Link href={project.link} target="_blank">
                  Visit Project
                </Link>
              )}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}