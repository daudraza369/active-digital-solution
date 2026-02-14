import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";

export default function ProjectsPage() {
  return (
    <div>
      <section className="py-20 bg-dark-card/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Take a Look at Our <span className="text-accent">Completed Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our completed projects—an intersection of innovation and implementation, each telling a success story on its own.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projectsData.map((project: { id: string; name: string; thumbnail: string; url: string }) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                thumbnail={project.thumbnail}
                url={project.url}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
