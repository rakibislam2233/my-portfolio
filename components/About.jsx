import Image from "next/image";
import AboutPic from "@/public/assets/image/coder.png";
import TitleAnimation from "./TitleAnimation";
const About = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto py-10">
      <TitleAnimation text={"About Us"} subText={" Know Me More"} s />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div>
          <Image
            className="w-full md:w-[600px] h-full mdh-[400px] rounded"
            src={AboutPic}
            alt="About Pic"
          />
        </div>
        <div className="text-lg font-semibold space-y-3 mt-8">
          <h1>
            <span className="text-xl font-semibold text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text">
              Hi 👋 My name is Rakib.
            </span>{" "}
            {`I'm a Junior Frontend Developer from
              Bangladesh.`}{" "}
            I have done developing many web projects with extensive experience
            and I enjoy making websites.Adept in User interface, Branding &
            creating attractive, Fully Responsive and Bringing forth expertise
            in design. I always strive to achieve the best results and enhance
            my skills.
          </h1>
          <div>
            <h1>Name : Md Rakib Ali</h1>
            <h1>Email : rakib2020.tkg@gmail.com</h1>
            <h1>Phone : +8801319101179</h1>
            <h1>Address : Thakurgaon Sadar Thakurgaon</h1>
            <h1>Language : Bangla, English</h1>
          </div>
          <button className="px-10 py-2 bg-gradient-to-r from-orange-500 to-pink-500 font-semibold text-white rounded-xl">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
