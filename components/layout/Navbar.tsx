"use client"

import Link from "next/link"
import ThemeSwitcher from "./ThemeSwitcher"

import { FaGithubAlt } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("none")

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      style={{
        transform: scrollDirection === "down" ? "translateY(-100%)" : "none",
        transition: "transform 0.3s ease-in-out",
      }}
      className="sticky top-8 z-20 bg-white/40 dark:bg-black/40 backdrop-blur-md mt-8 p-8 border dark:border-none rounded-xl w-full shadow-md container"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex flex-col items-center -space-y-2">
            <p className="font-bold text-xl">Alex Melia</p>
            <p className="text-md">web developer</p>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="bg-black dark:bg-white text-white dark:text-black font-semibold px-4 py-1 rounded-xl text-base"
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="bg-black dark:bg-white text-white dark:text-black font-semibold px-4 py-1 rounded-xl text-base"
              onClick={() => setScrollDirection("down")}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="bg-black dark:bg-white text-white dark:text-black font-semibold px-4 py-1 rounded-xl text-base"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className="bg-black dark:bg-white text-white dark:text-black font-semibold px-4 py-1 rounded-xl text-base"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <FaGithubAlt
              size={46}
              className="hover:bg-gray-100 dark:hover:bg-tertiary p-2 rounded-lg transition ease-in-out-1"
            />
            <FaLinkedin
              size={46}
              className="hover:bg-gray-100 dark:hover:bg-tertiary p-2 rounded-lg transition ease-in-out-1"
            />
            <FaEnvelope
              size={46}
              className="hover:bg-gray-100 dark:hover:bg-tertiary p-2 rounded-lg transition ease-in-out-1"
            />
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}
