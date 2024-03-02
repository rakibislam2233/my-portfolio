import Banner from "@/components/Banner";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <main className="w-full h-full px-10 py-5">
      <Banner />
      <About />
      <Skills />
      <Project />
      <Contact />
    </main>
  );
};

export default Home;
