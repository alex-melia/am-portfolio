import {
  BiFolder,
  BiLogoGithub,
  BiSolidRightTopArrowCircle,
} from "react-icons/bi"
import { FaGithub, FaRegNewspaper } from "react-icons/fa"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

interface ProjectCardProps {
  project: any
}

export default function ProjectCard({ project }: ProjectCardProps) {
  console.log(project)

  function getIcon(type: string) {
    switch (type) {
      case "github":
        return <FaGithub size={24} />
      case "site":
        return <FaArrowUpRightFromSquare size={24} />
      case "blog":
        return <FaRegNewspaper size={24} />
      default:
        return <p>{type}</p>
    }
  }

  return (
    <div className="flex flex-col border rounded-md p-4 shadow-xl hover:-translate-y-2 transition ease-in-out duration-300">
      <div className="flex justify-between mb-4">
        <BiFolder size={32} />
        <div className="flex items-center gap-4">
          {project.links?.map((link: any, i: number) => (
            <a href={`${link.url}`} key={i}>
              {getIcon(link.type)}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold">{project.title}</p>
        <p className="text-sm font-light">{project.description}</p>
        <div className="grid grid-flow-auto grid-cols-4 place-items-center gap-2">
          {project.technologies.map((technology: any, i: number) => (
            <p key={i}>{technology.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
