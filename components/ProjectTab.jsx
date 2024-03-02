"use client";
import art from "@/public/assets/projects/art.png";
import { useState } from "react";
const ProjectTab = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <div className="w-full max-w-[550px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 items-center">
          <button className="px-8 py-2 border border-gray-700 font-semibold rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 ">
            All
          </button>
          <button className="px-8 py-2 border border-gray-700 font-semibold rounded-xl hover:bg-gradient-to-r from-orange-500 to-pink-500 ">
            React
          </button>
          <button className="px-8 py-2 border border-gray-700 font-semibold rounded-xl hover:bg-gradient-to-r from-orange-500 to-pink-500 ">
            Next Js
          </button>
          <button className="px-8 py-2 border border-gray-700 font-semibold rounded-xl hover:bg-gradient-to-r from-orange-500 to-pink-500 ">
            MERN
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        <div className="border border-gray-700 rounded-xl">
          <div class="image-wrap rounded-t-xl">
            <img className="rounded-t-xl cursor-pointer" src={art.src} />
          </div>
          <div className="px-3 py-2">
            <h1 className="text-3xl font-semibold">Photo Tune</h1>
            <p className="font-semibold">
              This Project Photography Related Website
            </p>
            <div className="flex justify-center gap-2 items-center my-3 flex-wrap">
              <h1 className="px-3 py-1 bg-gray-800 rounded-xl text-sm">
                React
              </h1>
              <h1 className="px-3 py-1 bg-gray-800 rounded-xl text-sm">Node</h1>
              <h1 className="px-3 py-1 bg-gray-800 rounded-xl text-sm">
                Mongodb
              </h1>
              <h1 className="px-3 py-1 bg-gray-800 rounded-xl text-sm">
                React
              </h1>
            </div>
            <div className="py-3 flex justify-between items-center">
              <button className="px-5 py-1 border border-gray-700 hover:bg-gradient-to-r from-orange-500 to-pink-500  rounded-xl font-semibold transition-all duration-500 ">
                Live Link
              </button>
              <button
                className="px-5 py-1 border border-gray-700 hover:bg-gradient-to-r from-orange-500 to-pink-500  rounded-xl font-semibold transition-all duration-500 "
              >
                Source Code
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <button className="px-5 py-2 bg-gradient-to-r from-orange-500 to-pink-500 font-semibold text-white rounded-xl">
          Load More
        </button>
      </div>
    </>
  );
};

export default ProjectTab;
