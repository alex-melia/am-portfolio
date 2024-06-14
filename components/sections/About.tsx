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
    <section className="sm:p-12 pt-12 flex flex-col text-left gap-4">
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-medium text-lg sm:text-2xl text-center sm:text-left">
            Full Stack Web Developer, proficient in Node & React ecosystem.
          </h1>
          <div className="sm:hidden mx-24">
            <Image
              className="rounded-full"
              src="/me.jpg"
              alt="My picture"
              layout="responsive"
              width="256"
              height="1"
            />
          </div>
          <p className="text-md text-center sm:text-left sm:text-xl font-light">
            👋 Hi, I&apos;m Alex! Welcome to my portfolio site!
          </p>
        </div>
        <div className="hidden sm:block">
          <Image
            className="rounded-full"
            src="/me.jpg"
            alt="My picture"
            width="456"
            height="1"
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 max-w-[800px] mt-12">
        <p className="text-base sm:text-lg text-secondary">
          Recent Software Engineering graduate seeking opportunities within the
          industry
        </p>
        <p className="text-base sm:text-lg text-secondary">
          Identifier of problems, creator of solutions.
        </p>
        <p className="text-base sm:text-lg text-secondary">
          Currently working on personal projects
        </p>
      </div>

      <h2 className="text-lg font-bold mt-12">Skills</h2>
      <div className="grid grid-cols-3 grid-rows-[repeat(auto-fit, minmax(100px, 1fr))] gap-2">
        <div className="flex bg-tertiary dark:border-tertiary items-center gap-2 border w-fit p-1.5 rounded-xl">
          <BiLogoJavascript className="w-4 h-4" color="#F7DF1E" />
          <p className="text-sm sm:text-base">JavaScript</p>
        </div>
        <div className="flex bg-tertiary dark:border-tertiary items-center gap-2 border w-fit p-1.5 rounded-xl ">
          <BiLogoTypescript className="w-4 h-4" color="#3178C6" />
          <p className="text-sm sm:text-base">TypeScript</p>
        </div>
        <div className="flex bg-tertiary dark:border-tertiary items-center gap-2 border w-fit p-1.5 rounded-xl">
          <BiLogoReact className="w-4 h-4" color="#61DAFB" />
          <p className="text-sm sm:text-base">React.js</p>
        </div>
        <div className="flex bg-tertiary dark:border-tertiary items-center gap-2 border w-fit p-1.5 rounded-xl">
          <BiLogoNodejs className="w-4 h-4" color="#339933" />
          <p className="text-sm sm:text-base">Node.js</p>
        </div>
        <div className="flex bg-tertiary dark:border-tertiary items-center gap-2 border w-fit p-1.5 rounded-xl">
          <RiNextjsFill className="w-4 h-4" color="#000000" />
          <p className="text-sm sm:text-base">Next.js</p>
        </div>
        {/* </div> */}
        {/* <div className="flex w-full gap-2"> */}
        <div className="flex bg-tertiary dark:border-tertiary items-center gap-2 border w-fit p-1.5 rounded-xl">
          <SiExpress className="w-4 h-4" color="#000000" />
          <p className="text-sm sm:text-base">Express.js</p>
        </div>
        <div className="flex bg-tertiary dark:border-tertiary items-center gap-2 border w-fit p-1.5 rounded-xl">
          <BiLogoMongodb className="w-4 h-4" color="#47A248" />
          <p className="text-sm sm:text-base">MongoDB</p>
        </div>
        <div className="flex bg-tertiary dark:border-tertiary items-center gap-2 border w-fit p-1.5 rounded-xl">
          <BiLogoPostgresql className="w-4 h-4" color="#336791" />
          <p className="text-sm sm:text-base">PostgreSQL</p>
        </div>
        <div className="flex bg-tertiary dark:border-tertiary items-center gap-2 border w-fit p-1.5 rounded-xl">
          <SiMysql className="w-4 h-4" color="#E76F00" />
          <p className="text-sm sm:text-base">MySQL</p>
        </div>
        {/* </div> */}
        {/* <div className="flex w-full gap-2"> */}
        <div className="flex bg-tertiary dark:border-tertiary items-center gap-2 border w-fit p-1.5 rounded-xl">
          <FaGitAlt className="w-4 h-4" color="#F05032" />
          <p className="text-sm sm:text-base">git</p>
        </div>
        <div className="flex bg-tertiary dark:border-tertiary items-center gap-2 border w-fit p-1.5 rounded-xl">
          <BiLogoDocker className="w-4 h-4" color="#2496ED" />
          <p className="text-sm sm:text-base">Docker</p>
        </div>
        <div className="flex bg-tertiary dark:border-tertiary items-center gap-2 border w-fit p-1.5 rounded-xl">
          <SiKubernetes className="w-4 h-4" color="#326CE5" />
          <p className="text-sm sm:text-base">Kubernetes</p>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}
