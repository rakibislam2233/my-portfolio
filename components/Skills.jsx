"use client";

import { getSkills } from "@/action/getSkills";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import TitleAnimation from "./TitleAnimation";

const Skills = () => {
  const [frontendSkills, setFrontendSkills] = useState([]);
  const [backendSkills, setBackendSkills] = useState([]);
  const [tools, setTools] = useState([]);

  const fetchFrontendSkills = async () => {
    const data = await getSkills("frontend");
    setFrontendSkills(data);
  };
  const fetchBackendSkills = async () => {
    const data = await getSkills("backend");
    setBackendSkills(data);
  };
  const fetchTools = async () => {
    const data = await getSkills("tools");
    setTools(data);
  };

  useEffect(() => {
    fetchFrontendSkills();
    fetchBackendSkills();
    fetchTools();
  }, []);
  return (
    <Element name="skills">
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
                    width={i === 6 || i === 8 ? 60 : 50}
                    height={i === 6 || i === 8 ? 60 : 50}
                    src={skill?.skillImage}
                    alt={skill?.name}
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
                    src={skill?.skillImage}
                    alt={skill?.name}
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
                    src={tool?.skillImage}
                    alt={tool?.name}
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
    </Element>
  );
};

export default Skills;
