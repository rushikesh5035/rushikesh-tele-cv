import BlogCard from "@/components/BlogCard";
import { blogmetadata } from "@/data/blogs";
import { skills } from "@/data/skills";

import * as motion from "motion/react-client";

export default function Skills() {
  const transition = {
    duration: 0.2,
    delay: 0.4,
    ease: [0, 0.71, 0.2, 1.01],
  };
  return (
    <motion.main
      initial={{ filter: "blur(15px)", y: 20, opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={transition}
    >
      {/* FRONTEND */}
      <div className="p-3 border border-zinc-800 rounded-md mb-3 hover:scale-105 transition-all">
        <h3 className="text-1xl font-bold ">Frontend:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.slice(0, 11).map((skill) => (
            <div key={skill.name}>
              <img src={skill.skillUrl} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>

      {/* BACKEND */}
      <div className="p-3 border border-zinc-800  rounded-md mb-3 hover:scale-105 transition-all">
        <h3 className="text-1xl font-bold ">Backend:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.slice(11, 16).map((skill) => (
            <div key={skill.name}>
              <img src={skill.skillUrl} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>

      {/* DATABASES */}
      <div className="p-3 border border-zinc-800  rounded-md mb-3 hover:scale-105 transition-all">
        <h3 className="text-1xl font-bold ">Databases:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.slice(16, 21).map((skill) => (
            <div key={skill.name}>
              <img src={skill.skillUrl} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>

      {/* APP DEVELOPMENT */}
      <div className="p-3 border border-zinc-800  rounded-md mb-3 hover:scale-105 transition-all">
        <h3 className="text-1xl font-bold ">App Development:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.slice(21, 23).map((skill) => (
            <div key={skill.name}>
              <img src={skill.skillUrl} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="p-3 border border-zinc-800  rounded-md mb-3 hover:scale-105 transition-all">
        <h3 className="text-1xl font-bold ">Languages:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.slice(23, 26).map((skill) => (
            <div key={skill.name}>
              <img src={skill.skillUrl} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>

      {/* Others */}
      <div className="p-3 border border-zinc-800  rounded-md mb-3 hover:scale-105 transition-all">
        <h3 className="text-1xl font-bold ">Other:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.slice(26, 35).map((skill) => (
            <div key={skill.name}>
              <img src={skill.skillUrl} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
