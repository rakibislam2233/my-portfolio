"use client";
import { getProject } from "@/action/getProject";
import { useEffect, useState } from "react";
import ProjectDetails from "./ProjectDetails";
const ProjectTab = () => {
  const [isTab, setIsTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState([]);
  const projectsPerPage = 3;

  const fetchProject = async () => {
    const projects = await getProject();
    setProjects(projects);
  };
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

  useEffect(() => {
    fetchProject();
  }, []);
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
        {currentProjects.length > 0 ? (
          currentProjects.map((project, i) => (
            <ProjectDetails key={i} project={project} />
          ))
        ) : (
          <h1 className="text-xl font-semibold text-center">
            No Data Avaiable
          </h1>
        )}
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
