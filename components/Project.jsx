"use client";
import { Element } from "react-scroll";
import ProjectTab from "./ProjectTab";
import TitleAnimation from "./TitleAnimation";
const Project = () => {
  return (
    <Element name="project">
      <section className="w-full max-w-[1200px] mx-auto py-10">
        <TitleAnimation text={"Projects"} subText={"My Works"} />
        <ProjectTab />
      </section>
    </Element>
  );
};

export default Project;
