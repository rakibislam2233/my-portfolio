"use client";
import { useState } from "react";
const ProjectTab = () => {
  const [isTab, setIsTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const projects = [
    {
      projectName: "Artistry ",
      projectDescription: "This is a MERN related website",
      projectImage: "https://i.postimg.cc/c4zkjsZd/art.png",
      technology: ["react", "node", "express", "mongodb"],
      liveLink: "",
      sourceCode: "",
    },
    {
      projectName: "Laroja",
      projectDescription: "This is a MERN related website",
      projectImage: "https://i.postimg.cc/d02WLrC0/laroja.png",
      technology: ["nextjs", "redux", "mongodb", "vercel"],
      liveLink: "",
      sourceCode: "",
    },
    {
      projectName: "Legostoy ",
      projectDescription: "This is a MERN related website",
      projectImage: "https://i.postimg.cc/ZnRj7QM9/legostoy.png",
      technology: ["react", "node", "mongodb", "firebase"],
      liveLink: "",
      sourceCode: "",
    },
    {
      projectName: "Musicy ",
      projectDescription: "This is a MERN related website",
      projectImage: "https://i.postimg.cc/3R9nZhn5/music.png",
      technology: ["react", "node", "mongodb", "firebase"],
      liveLink: "",
      sourceCode: "",
    },
    {
      projectName: "TKGBDS ",
      projectDescription: "This is a MERN related website",
      projectImage: "https://i.postimg.cc/7L8sHmfc/tkgbds.png",
      technology: ["nextjs", "node", "mongodb", "firebase"],
      liveLink: "",
      sourceCode: "",
    },
    {
      projectName: "Artistry ",
      projectDescription: "This is a MERN related website",
      projectImage: "https://i.postimg.cc/c4zkjsZd/art.png",
      technology: ["react", "node", "mongodb", "firebase"],
      liveLink: "",
      sourceCode: "",
    },
  ];
  const filterProjects = (tab) => {
    if (tab === "all") {
      return projects;
    } else if (tab === "mern") {
      return projects.filter(
        (project) =>
          project?.technology.includes("mongodb") &&
          project?.technology.includes("node") &&
          project?.technology.includes("react") &&
          project?.technology.includes("express")
      );
    } else {
      return projects.filter((project) =>
        project?.technology.includes(tab.toLowerCase())
      );
    }
  };

  const filteredProjects = filterProjects(isTab);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <div className="w-full max-w-[550px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 items-center">
          <button
            onClick={() => [setIsTab("all"), setCurrentPage(1)]}
            className={`px-8 py-2 border border-gray-700 font-semibold rounded-xl ${
              isTab === "all" && "bg-gradient-to-r from-orange-500 to-pink-500"
            } `}
          >
            All
          </button>
          <button
            onClick={() => [setIsTab("react"), setCurrentPage(1)]}
            className={`px-8 py-2 border border-gray-700 font-semibold rounded-xl ${
              isTab === "react" &&
              "bg-gradient-to-r from-orange-500 to-pink-500"
            } `}
          >
            React
          </button>
          <button
            onClick={() => [setIsTab("nextjs"), setCurrentPage(1)]}
            className={`px-8 py-2 border border-gray-700 font-semibold rounded-xl ${
              isTab === "nextjs" &&
              "bg-gradient-to-r from-orange-500 to-pink-500"
            } `}
          >
            Next.js
          </button>
          <button
            onClick={() => [setIsTab("mern"), setCurrentPage(1)]}
            className={`px-8 py-2 border border-gray-700 font-semibold rounded-xl ${
              isTab === "mern" && "bg-gradient-to-r from-orange-500 to-pink-500"
            } `}
          >
            MERN
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {currentProjects.map((project, i) => (
          <div key={i} className="border border-gray-700 rounded-xl">
            <div className="image-wrap rounded-t-xl">
              <img
                className="rounded-t-xl cursor-pointer"
                src={project.projectImage}
                alt={project.projectName}
              />
            </div>
            <div className="px-3 py-2">
              <h1 className="text-3xl font-semibold">{project.projectName}</h1>
              <p className="font-semibold">{project.projectDescription}</p>
              <div className="flex justify-center gap-2 items-center my-3 flex-wrap">
                {project.technology.map((tech, index) => (
                  <h1
                    key={index}
                    className="px-3 py-1 bg-gray-800 rounded-xl text-sm"
                  >
                    {tech}
                  </h1>
                ))}
              </div>
              <div className="py-3 flex justify-between items-center">
                <button className="px-5 py-1 border border-gray-700 hover:bg-gradient-to-r from-orange-500 to-pink-500  rounded-xl font-semibold transition-all duration-500 ">
                  Live Link
                </button>
                <button className="px-5 py-1 border border-gray-700 hover:bg-gradient-to-r from-orange-500 to-pink-500  rounded-xl font-semibold transition-all duration-500 ">
                  Source Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center items-center">
        {Array(Math.ceil(filteredProjects.length / projectsPerPage))
          .fill()
          .map((_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`px-3 py-1 mx-1 border border-gray-700 font-semibold rounded-xl ${
                currentPage === i + 1 &&
                "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
      </div>
    </>
  );
};

export default ProjectTab;
