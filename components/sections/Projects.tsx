import ProjectCard from "../projects/ProjectCard"
import ProjectHero from "../projects/ProjectHero"
import projects from "../../data/projects.json"

export default function Projects() {
  return (
    <section id="projects" className="p-12 min-h-screen">
      <h1 className="text-center text-2xl font-bold mb-12">
        Some Things I've Built
      </h1>
      <div className="flex flex-col gap-24">
        <ProjectHero imagePosition="left" project={projects[0]} />
        <ProjectHero imagePosition="right" project={projects[1]} />
        <ProjectHero imagePosition="left" project={projects[2]} />
        <p className="my-24 text-center text-xl font-bold">Other Projects</p>
        <div className="grid grid-flow-auto grid-cols-3 gap-8">
          {projects.slice(3).map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
