import ProjectCard from "../projectCard";
import connectDB from '@/database/db';
import Project from "@/database/projectSchema";

async function getProjects() {
  await connectDB();
  try {
    const projects = await Project.find().orFail();
    return projects;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <main>
      <h1 className="page-title">Theodore's Portfolio</h1>

      <div className="portfolio">
        {projects.map((project: any) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            description={project.description}
            image={project.image}
            imageAlt={project.image_alt}
            link={project.link}
          />
        ))}
      </div>

      <footer className="footer">
        © 2025 Theodore&apos;s Website | All Rights Reserved
      </footer>
    </main>
  );
}
