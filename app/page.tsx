// "use client";

import Image from "next/image";
import rushikesh from "@/public/rushikesh.jpg";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SocialLinks } from "@/lib/constants";
import * as motion from "motion/react-client";
import techStack from "@/public/skills-images/techStack.png";

export default function Home() {
  const transition = {
    duration: 0.2,
    delay: 0.4,
    ease: [0, 0.71, 0.2, 1.01],
  };
  return (
    <motion.main
      initial={{ filter: "blur(15px)", y: 20 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={transition}
      className="opacity-0"
    >
      {/* About me Section */}
      <div className="pt-10 flex gap-10 sm:flex-row flex-col">
        <div className="flex items-center justify-center">
          <Image
            src={rushikesh}
            width={300}
            height={300}
            className="rounded-2xl"
            alt="Rushikesh"
          />
        </div>
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Hi, i&apos;m Rushikesh 👋
          </h1>

          <p className="">
            I am a third year student who loves building apps and websites that
            are useful.
          </p>
          <p className="">
            Full Stack Developer, App Developer and DevOps Engineer.
          </p>

          <div className="flex gap-4 ">
            <Link
              href={SocialLinks.github}
              target="_blank"
              className="flex items-center"
            >
              <FaGithub size={27} className="hover:scale-125 transition-all" />
            </Link>
            <Link
              href={SocialLinks.linkedin}
              target="_blank"
              className="flex items-center"
            >
              <FaLinkedin
                size={27}
                className="hover:scale-125 transition-all"
              />
            </Link>
            <Link
              href={SocialLinks.x}
              target="_blank"
              className="flex items-center"
            >
              <FaXTwitter
                size={27}
                className="hover:scale-125 transition-all"
              />
            </Link>
            <Link
              href={SocialLinks.instagram}
              target="_blank"
              className="flex items-center"
            >
              <FaInstagram
                size={27}
                className="hover:scale-125 transition-all"
              />
            </Link>

            <div className="bg-green-200 text-green-800 text-xs px-1 rounded-sm flex items-center gap-2 font-bold border w-fit border-green-800 hover:scale-125 transition-all">
              <Link
                href="https://drive.google.com/file/d/1NghMSDV-tUfMl68xkPo-P53ae9ukXZu_/view?usp=sharing"
                target="_blank"
                className="flex items-center gap-2"
              >
                Resume
                <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold pt-7 ">Tech Stack</h1>
      <p className="text-center">
        Technologies I use to build modern web applications
      </p>
      <div className="flex flex-wrap justify-center py-3 px-3 border border-zinc-800 rounded-md gap-2 mt-3 hover:scale-105 transition-all">
        <Image src={techStack} width={700} height={10} alt="frontend" />
      </div>

      <h1 className="text-3xl font-bold pt-10 ">Projects</h1>
      {/* Projects section */}
      <div className="flex flex-wrap">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard
            project={project}
            className="md:w-1/2 sm:w-1/2 w-full"
            key={project.title}
          />
        ))}
        <div className="w-full flex justify-center p-4">
          <Link
            href={"/projects"}
            className="font-bold underline hover:no-underline text-lg"
          >
            Show more
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
