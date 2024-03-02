import ProjectTab from "./ProjectTab";
import TitleAnimation from "./TitleAnimation";
const Project = () => {
  const projects = [
    {
      name: "Phototune",
      image: "https://i.postimg.cc/Jh1x8Knd/Screenshot-2023-08-16-152816.png",
      description: "This Project Photography Related",
      website: "https://phototune-e5365.web.app/",
      clientSide: "https://github.com/rakibislam2233/Phototune-Client-Side",
      serverSide: "https://github.com/rakibislam2233/Phototune-Server-Side",
    },
  ];
  return (
    <section className="w-full max-w-[1200px] mx-auto py-10">
      <TitleAnimation text={"Projects"} subText={"My Works"} />
      <ProjectTab />
    </section>
  );
};

export default Project;
