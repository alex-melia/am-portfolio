import {
  BiLogoGithub,
  BiFolder,
  BiSolidRightTopArrowCircle,
} from "react-icons/bi"
import kicktalkImage from "../../public/kicktalk.png"
import Image from "next/image"
import ProjectCard from "../projects/ProjectCard"
import projects from "../../data/projects.json"

export default function Projects() {
  return (
    <section id="projects" className="p-12 min-h-screen">
      <h1 className="text-center text-2xl font-bold mb-12">
        Some Things I've Built
      </h1>
      <div className="flex flex-col gap-24">
        <div className="grid grid-cols-[3fr,2fr] gap-2 border p-2 rounded-xl shadow-lg">
          <a href="https://kicktalk-client.vercel.app">
            <Image
              src={kicktalkImage}
              alt="KickTalk image"
              width={800}
              height={1}
            />
          </a>
          <div className="flex flex-col gap-8 text-right">
            <div className="flex flex-col">
              <p className="font-light text-lg">Featured Project</p>
              <p className="font-bold text-xl">KickTalk - MERN App</p>
            </div>
            <div className="bg-gray-50 p-2 border border-gray-100 rounded-sm shadow-sm">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                corrupti repellat ad in, perspiciatis porro quam adipisci vero,
                dignissimos nemo, iusto consequuntur cupiditate maiores cumque
                veritatis. Doloribus esse eveniet quaerat!
              </p>
            </div>
            <div className="grid grid-cols-4 ml-12 justify-between place-items-center gap-2">
              <p>React.js</p>
              <p>Node.js</p>
              <p>MongoDB</p>
              <p>Express.js</p>
              <p>Redis</p>
              <p>TailwindCSS</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[2fr,3fr] gap-2">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col text-left">
              <p className="font-light text-lg">Featured Project</p>
              <p className="font-bold text-xl">SpendWise - Next.js</p>
            </div>
            <div className="bg-gray-50 p-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                corrupti repellat ad in, perspiciatis porro quam adipisci vero,
                dignissimos nemo, iusto consequuntur cupiditate maiores cumque
                veritatis. Doloribus esse eveniet quaerat!
              </p>
            </div>
          </div>
          <p className="bg-black">1</p>
        </div>
        <div className="grid grid-cols-[3fr,2fr] gap-2">
          <p className="bg-black">1</p>
          <div className="flex flex-col gap-8 text-right">
            <div className="flex flex-col">
              <p className="font-light text-lg">Featured Project</p>
              <p className="font-bold text-xl">
                E-Barter - Microservices Web App
              </p>
            </div>
            <div className="bg-gray-50 p-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                corrupti repellat ad in, perspiciatis porro quam adipisci vero,
                dignissimos nemo, iusto consequuntur cupiditate maiores cumque
                veritatis. Doloribus esse eveniet quaerat!
              </p>
            </div>
          </div>
        </div>

        <p className="my-24 text-center text-xl font-bold">Other Projects</p>

        <div className="grid grid-flow-auto grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
