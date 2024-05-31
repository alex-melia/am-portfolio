import {
  BiFolder,
  BiLogoGithub,
  BiSolidRightTopArrowCircle,
} from "react-icons/bi"

interface ProjectCardProps {
  project: any
}

export default function ProjectCard({ project }: ProjectCardProps) {
  console.log(project)

  return (
    <div className="flex flex-col border rounded-md p-4 shadow-xl hover:-translate-y-2 transition ease-in-out duration-300">
      <div className="flex justify-between mb-4">
        <BiFolder size={32} />
        <div className="flex items-center gap-2">
          {project.links.map((link: any) => (
            <a href={link.link}>
              {link.type === "github" ? (
                <BiLogoGithub size={32} />
              ) : (
                <BiSolidRightTopArrowCircle size={32} />
              )}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold">{project.title}</p>
        <p className="text-sm font-light">{project.description}</p>
        <div className="grid grid-flow-auto grid-cols-4 place-items-center gap-2">
          {project.technologies.map((technology: any) => (
            <p>{technology.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
