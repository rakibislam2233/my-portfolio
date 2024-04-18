"use client";
import Image from "next/image";
import logo from "@/public/assets/image/AboutImage.jpg";
import {
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiTwitter,
} from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { Element } from "react-scroll";

const Banner = () => {
  return (
    <Element name="home">
      <section className="w-full max-w-[1200px] mx-auto grid grid-cols-1 py-16 md:grid-cols-2 gap-10">
        <div>
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Welcome to my World</h1>
            <h1 className="text-5xl font-semibold">
              {`Hi,I'm`}{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text">
                Rakib
              </span>
              <span className="animate-ping">👋</span>
            </h1>
            <h1 className="text-3xl font-semibold">
              I am a{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text">
                <Typewriter
                  words={[
                    "Web Developer",
                    "Frontend Developer",
                    "React Developer",
                    "MERN Stack Developer",
                    "Full Stack Developer",
                  ]}
                  loop={Infinity}
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              _
            </h1>
            <p className="text-lg font-semibold">
              As a web developer, I have a passion for creating dynamic and
              engaging online experiences. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations.
            </p>
            <div className="flex gap-4">
              <Link
                href={"https://www.facebook.com/all.rakib.39"}
                target="_blank"
              >
                <button className="w-10 h-10 rounded-full border border-gray-800 flex justify-center items-center hover:bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-105 transition-all duration-300">
                  <FiFacebook className="w-5 h-5" />
                </button>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/md-rakib-ali/"}
                target="_blank"
              >
                <button className="w-10 h-10 rounded-full border border-gray-800 flex justify-center items-center hover:bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-105 transition-all duration-300">
                  <FiLinkedin className="w-5 h-5" />
                </button>
              </Link>
              <Link href={"https://github.com/rakibislam2233"} target="_blank">
                <button className="w-10 h-10 rounded-full border border-gray-800 flex justify-center items-center hover:bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-105 transition-all duration-300">
                  <FiGithub className="w-5 h-5" />
                </button>
              </Link>
              <Link
                href={"https://www.instagram.com/r_a_k_i_b_i_s_l_m/"}
                target="_blank"
              >
                <button className="w-10 h-10 rounded-full border border-gray-800 flex justify-center items-center hover:bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-105 transition-all duration-300">
                  <FiInstagram className="w-5 h-5" />
                </button>
              </Link>
              <Link href={"https://twitter.com/md_ali13495"} target="_blank">
                <button className="w-10 h-10 rounded-full border border-gray-800 flex justify-center items-center hover:bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-105 transition-all duration-300">
                  <FiTwitter className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full flex gap-5 mt-10">
            <Link
              href={
                "https://drive.google.com/file/d/1YZVoKdkX0YY3khJgtoy9a_CLmUSZHT6a/view?usp=sharing"
              }
              target="_blank"
            >
              <button className="px-5 py-2 bg-gradient-to-r from-orange-500 to-pink-500 font-semibold text-white rounded-xl ">
                See Resume
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[315px] h-[315px] bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto flex justify-center items-center mt-10">
          <Image
            className="w-[300px] h-[300px] mx-auto  rounded-full"
            src={logo}
            alt=""
          />
        </div>
      </section>
    </Element>
  );
};

export default Banner;
