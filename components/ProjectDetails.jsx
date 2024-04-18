import Link from "next/link";

const ProjectDetails = ({ project }) => {
  return (
    <div className="border border-gray-700 rounded-xl">
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
          <Link href={project?.liveLink} target="_blank">
            <button className="px-5 py-1 border border-gray-700 hover:bg-gradient-to-r from-orange-500 to-pink-500  rounded-xl font-semibold transition-all duration-500 ">
              Live Link
            </button>
          </Link>
          <Link href={project?.sourceCode} target="_blank">
            <button className="px-5 py-1 border border-gray-700 hover:bg-gradient-to-r from-orange-500 to-pink-500  rounded-xl font-semibold transition-all duration-500 ">
              Source Code
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
