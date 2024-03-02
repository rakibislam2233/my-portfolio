import About from "@/components/About";
import Banner from "@/components/Banner";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <main className="w-full h-full px-10 py-5">
      <Banner />
      <About/>
      <Skills/>
      <Project/>
    </main>
  );
};

export default Home;
