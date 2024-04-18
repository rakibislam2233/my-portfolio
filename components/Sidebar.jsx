"use client";
import Image from "next/image";
import logo from "@/public/assets/image/logo.jpg";
import { Link } from "react-scroll";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="hidden md:block">
        <div className="w-full max-w-[1200px]  mx-auto md:h-screen md:flex justify-center">
          <div className="mt-20 flex flex-row md:flex-col justify-between md:justify-normal gap-5 px-10 ">
            <div className="space-y-2">
              <Image
                className="rounded-full mx-auto"
                width={80}
                height={80}
                src={logo}
                alt="logo"
              />
              <h1 className="text-xl font-semibold text-center">
                Md Rakib Ali
              </h1>
            </div>
            <div className="mt-5">
              <ul className="flex flex-col gap-3 text-center">
                <Link to="home" smooth={true} duration={500} offset={-20}>
                  <li className="w-full px-3 py-2  cursor-pointer transition-all duration-500 rounded-xl border border-gray-700">
                    Home
                  </li>
                </Link>
                <Link to="about" smooth={true} duration={500}>
                  <li className="w-full px-3 py-2  cursor-pointer transition-all duration-500 rounded-xl border border-gray-700">
                    About
                  </li>
                </Link>
                <Link to="skills" smooth={true} duration={500}>
                  <li className="w-full px-3 py-2  cursor-pointer transition-all duration-500 rounded-xl border border-gray-700">
                    Skills
                  </li>
                </Link>
                <Link to="project" smooth={true} duration={500}>
                  <li className="w-full px-3 py-2  cursor-pointer transition-all duration-500 rounded-xl border border-gray-700">
                    Project
                  </li>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                  <li className="w-full px-3 py-2  cursor-pointer transition-all duration-500 rounded-xl border border-gray-700">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="w-full flex justify-between items-center p-5 bg-gray-800">
          <h1 className="text-xl font-semibold">Rakib</h1>
          {open ? (
            <FaXmark
              onClick={() => setOpen(!open)}
              className="w-6 h-6 cursor-pointer "
            />
          ) : (
            <FaBars
              onClick={() => setOpen(!open)}
              className="w-6 h-6 cursor-pointer"
            />
          )}

          {open && (
            <ul className="w-full flex flex-col gap-4 justify-center items-center absolute left-0 right-0 top-[64px] p-5 bg-gray-800 z-30">
              <Link
                onClick={() => setOpen(false)}
                to="home"
                smooth={true}
                duration={500}
                offset={-20}
              >
                <li className="px-3 py-2  cursor-pointer transition-all duration-500 rounded-xl border border-gray-700">
                  Home
                </li>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                to="about"
                smooth={true}
                duration={500}
              >
                <li className="px-3 py-2  cursor-pointer transition-all duration-500 rounded-xl border border-gray-700">
                  About
                </li>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                to="skills"
                smooth={true}
                duration={500}
              >
                <li className="px-3 py-2  cursor-pointer transition-all duration-500 rounded-xl border border-gray-700">
                  Skills
                </li>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                to="project"
                smooth={true}
                duration={500}
              >
                <li className="px-3 py-2  cursor-pointer transition-all duration-500 rounded-xl border border-gray-700">
                  Project
                </li>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                to="contact"
                smooth={true}
                duration={500}
              >
                <li className="px-3 py-2  cursor-pointer transition-all duration-500 rounded-xl border border-gray-700">
                  Contact
                </li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
