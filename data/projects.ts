export type Project = {
  title: string;
  description: string;
  imgPath: string;
  techs: string[];
  githubLink?: string;
  liveLink?: string;
  status: "online" | "building";
};

export const projects: Project[] = [
  {
    title: "TypeArena",
    description:
      "A fast-paced multiplayer typing game that challenges your typing speed and accuracy.",
    imgPath: "/project-images/typearena.png",
    techs: ["NextJS", "ReactJS", "Socket.io", "TailwindCSS"],
    githubLink: "https://github.com/rushikesh5035/typearena",
    status: "building",
  },
  {
    title: "Forever",
    description:
      "A e-commerce application designed for shopping, specifically catering to a clothing brand.",
    imgPath: "/project-images/forever.png",
    techs: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS"],
    githubLink: "https://github.com/rushikesh5035/forever",
    liveLink: "https://forever-phi.vercel.app/",
    status: "online",
  },
  {
    title: "Crypto-plus",
    description: "Developed a real-time cryptocurrency tracker application.",
    imgPath: "/project-images/cryptoplus.png",
    techs: ["ReactJS", "API Integration"],
    githubLink: "https://github.com/rushikesh5035/Crypto-plus",
    liveLink: "https://crypto-plus-rose.vercel.app/",
    status: "online",
  },
  {
    title: "Map-track",
    description:
      "Developed a real-time location tracking system to display device movements on a live map.",
    imgPath: "/project-images/maptrack.png",
    techs: ["NodeJS", "ExpressJS", "Socket.io", "Leaflet.js"],
    githubLink: "https://github.com/rushikesh5035/map-track",
    status: "online",
  },
  // {
  //   title: "Map-track",
  //   description: "My personal portfolio website.",
  //   imgPath: "/project-images/portfolio-v1.png",
  //   techs: ["ReactJS", "NextJS", "TailwindCSS", "MagicUI"],
  //   githubLink: "https://github.com/rushikesh5035/map-track",
  //   liveLink: "https://ayushsharmaportfolio.vercel.app/",
  //   status: "online",
  // },
];
