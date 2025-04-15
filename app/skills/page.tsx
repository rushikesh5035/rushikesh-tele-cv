import * as motion from "motion/react-client";
import Image from "next/image";
import frontendSkill from "@/public/skills-images/frontendSkill.png";
import Backend from "@/public/skills-images/backend.png";
import databases from "@/public/skills-images/database.png";
import appdev from "@/public/skills-images/app-dev.png";
import languages from "@/public/skills-images/languages.png";
import others from "@/public/skills-images/others.png";

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
          <Image src={frontendSkill} width={600} height={10} alt="frontend" />
        </div>
      </div>

      {/* BACKEND */}
      <div className="p-3 border border-zinc-800  rounded-md mb-3 hover:scale-105 transition-all">
        <h3 className="text-1xl font-bold ">Backend:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <Image src={Backend} width={550} height={10} alt="backend" />
        </div>
      </div>

      {/* DATABASES */}
      <div className="p-3 border border-zinc-800  rounded-md mb-3 hover:scale-105 transition-all">
        <h3 className="text-1xl font-bold ">Databases:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <Image src={databases} width={550} height={10} alt="databases" />
        </div>
      </div>

      {/* APP DEVELOPMENT */}
      <div className="p-3 border border-zinc-800  rounded-md mb-3 hover:scale-105 transition-all">
        <h3 className="text-1xl font-bold ">App Development:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <Image src={appdev} width={550} height={10} alt="appdev" />
        </div>
      </div>

      {/* Languages */}
      <div className="p-3 border border-zinc-800  rounded-md mb-3 hover:scale-105 transition-all">
        <h3 className="text-1xl font-bold ">Languages:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <Image src={languages} width={550} height={10} alt="languages" />
        </div>
      </div>

      {/* Others */}
      <div className="p-3 border border-zinc-800  rounded-md mb-3 hover:scale-105 transition-all">
        <h3 className="text-1xl font-bold ">Other:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <Image src={others} width={650} height={10} alt="others" />
        </div>
      </div>
    </motion.main>
  );
}
