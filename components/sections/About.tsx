import Image from "next/image"

import { BiLogoTypescript } from "react-icons/bi"
import { BiLogoJavascript } from "react-icons/bi"
import { BiLogoNodejs } from "react-icons/bi"
import { BiLogoMongodb } from "react-icons/bi"
import { RiNextjsFill } from "react-icons/ri"
import { BiLogoReact } from "react-icons/bi"
import { SiExpress } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiMysql } from "react-icons/si"
import { FaGitAlt } from "react-icons/fa"
import { BiLogoDocker } from "react-icons/bi"
import { SiKubernetes } from "react-icons/si"

export default function About() {
  return (
    <section className="p-12 flex flex-col text-left gap-4">
      <div className="flex items-center gap-8">
        <Image
          className="rounded-full"
          src="/me.jpg"
          alt="My picture"
          width="256"
          height="1"
        />
        <div className="flex flex-col gap-4">
          <h1 className="font-medium text-2xl">
            Full Stack Web Developer, proficient in Node & React ecosystem.
          </h1>
          <p className="text-xl font-light">
            👋 Hi, I'm Alex! Welcome to my portfolio site!
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 max-w-[800px] mt-12">
        <p className="text-lg text-secondary">
          Recent Software Engineering graduate seeking opportunities within the
          industry
        </p>
        <p className="text-lg text-secondary">
          Passionate about creating solutions to enhance peoples daily lives
        </p>
        <p className="text-lg text-secondary">
          Currently working on personal projects
        </p>
      </div>

      <h2 className="text-lg font-bold mt-12">Skills</h2>
      <div className="flex gap-2">
        <div className="flex items-center gap-2 border w-fit p-1.5 rounded-xl bg-gray-50">
          <BiLogoJavascript size={32} color="#F7DF1E" />
          <p className="text-primary">JavaScript</p>
        </div>
        <div className="flex items-center gap-2 border w-fit p-1.5 rounded-xl bg-gray-50">
          <BiLogoTypescript size={32} color="#3178C6" />
          <p className="text-primary">TypeScript</p>
        </div>
        <div className="flex items-center gap-2 border w-fit p-1.5 rounded-xl bg-gray-50">
          <BiLogoReact size={32} color="#61DAFB" />
          <p className="text-base">React.js</p>
        </div>
        <div className="flex items-center gap-2 border w-fit p-1.5 rounded-xl bg-gray-50">
          <BiLogoNodejs size={32} color="#339933" />
          <p className="text-base">Node.js</p>
        </div>
        <div className="flex items-center gap-2 border w-fit p-1.5 rounded-xl bg-gray-50">
          <RiNextjsFill size={32} color="#000000" />
          <p className="text-base">Next.js</p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2 border w-fit p-1.5 rounded-xl bg-gray-50">
          <SiExpress size={32} color="#000000" />
          <p className="text-base">Express.js</p>
        </div>
        <div className="flex items-center gap-2 border w-fit p-1.5 rounded-xl bg-gray-50">
          <BiLogoMongodb size={32} color="#47A248" />
          <p className="text-base">MongoDB</p>
        </div>
        <div className="flex items-center gap-2 border w-fit p-1.5 rounded-xl bg-gray-50">
          <BiLogoPostgresql size={32} color="#336791" />
          <p className="text-base">PostgreSQL</p>
        </div>
        <div className="flex items-center gap-2 border w-fit p-1.5 rounded-xl bg-gray-50">
          <SiMysql size={32} color="#E76F00" />
          <p className="text-base">MySQL</p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2 border w-fit p-1.5 rounded-xl bg-gray-50">
          <FaGitAlt size={32} color="#F05032" />
          <p className="text-base">git</p>
        </div>
        <div className="flex items-center gap-2 border w-fit p-1.5 rounded-xl bg-gray-50">
          <BiLogoDocker size={32} color="#2496ED" />
          <p className="text-base">Docker</p>
        </div>
        <div className="flex items-center gap-2 border w-fit p-1.5 rounded-xl bg-gray-50">
          <SiKubernetes size={32} color="#326CE5" />
          <p className="text-base">Kubernetes</p>
        </div>
      </div>
    </section>
  )
}
