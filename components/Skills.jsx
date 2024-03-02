import TitleAnimation from "./TitleAnimation";
import Image from "next/image";

const Skills = () => {
  const frontendSkills = [
    {
      name: "Javascript",
      image: "/assets/skills/js.png",
    },
    {
      name: "Typescript",
      image: "/assets/skills/ts.png",
    },
    {
      name: "React",
      image: "/assets/skills/react.png",
    },
    {
      name: "Next Js",
      image: "/assets/skills/nextjs.png",
    },
    {
      name: "Redux",
      image: "/assets/skills/redux.png",
    },
    {
      name: "Tailwind Css",
      image: "/assets/skills/tailwindcss.png",
    },
    {
      name: "Material UI",
      image: "/assets/skills/mui.png",
    },
    {
      name: "Bootstrap",
      image: "/assets/skills/bs.png",
    },
  ];
  const backendSkills = [
    {
      name: "Node",
      image: "/assets/skills/nodejs.png",
    },
    {
      name: "Express",
      image: "/assets/skills/expressjs.png",
    },
    {
      name: "Mongodb",
      image: "/assets/skills/mongodb.png",
    },
    {
      name: "Mongoose",
      image: "/assets/skills/mongoose.png",
    },
  ];
  const tools = [
    {
      name: "Git",
      image: "/assets/skills/git.png",
    },
    {
      name: "Github",
      image: "/assets/skills/github.png",
    },
    {
      name: "Firebase",
      image: "/assets/skills/firebase.png",
    },
    {
      name: "Vs code",
      image: "/assets/skills/vscode.png",
    },
    {
      name: "Vercel",
      image: "/assets/skills/vercle.png",
    },
    {
      name: "Netlify",
      image: "/assets/skills/netlify.png",
    },
    {
      name: "Figma",
      image: "/assets/skills/figma.png",
    },
    {
      name: "Npm",
      image: "/assets/skills/npm.png",
    },
  ]
  return (
    <section className="w-full max-w-[1200px] mx-auto py-10">
      <TitleAnimation text={"Skills"} subText={"Skill Matrix"} />
      <div className="mt-10">
        <div>
          <h1 className="text-2xl font-semibold">Frontend Development</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
            {frontendSkills.map((skill, i) => (
              <div
                key={i}
                className="border border-gray-700 p-3 rounded-xl space-y-3 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <Image
                  className="rounded mx-auto"
                  width={i === 6 || i === 7 ? 60 : 50}
                  height={i === 6 || i === 7 ? 60 : 50}
                  src={skill.image}
                  alt={skill.name}
                />
                <h1 className="text-xl font-semibold text-center">
                  {skill.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-semibold">Backend Development</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
            {backendSkills.map((skill, i) => (
              <div
                key={i}
                className="border border-gray-700 p-3 rounded-xl space-y-3 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between "
              >
                <Image
                  className="rounded mx-auto"
                  width={i === 2 || i === 3 ? 80 : 50}
                  height={i === 2 || i === 3 ? 90 : 50}
                  src={skill.image}
                  alt={skill.name}
                />
                <h1 className="text-xl font-semibold text-center">
                  {skill.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-semibold">Dev Tools</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="border border-gray-700 p-3 rounded-xl space-y-3 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between "
              >
                <Image
                  className="rounded mx-auto"
                  width={50}
                  height={50}
                  src={tool.image}
                  alt={tool.name}
                />
                <h1 className="text-xl font-semibold text-center">
                  {tool.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
