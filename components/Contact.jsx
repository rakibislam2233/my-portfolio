"use client";
import React from "react";
import TitleAnimation from "./TitleAnimation";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <section className="w-full max-w-[1200px] mx-auto py-10">
        <TitleAnimation text={"Contact"} subText={"Let’s Talk"} />
        <div>
          <form className="w-full max-w-3xl mx-auto space-y-3 mt-5">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-3 py-2 bg-transparent border border-gray-700 mt-1 outline-none rounded-xl"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="name">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-3 py-2 bg-transparent border border-gray-700 mt-1 outline-none rounded-xl"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className="w-full px-3 py-2 bg-transparent border border-gray-700 mt-1 outline-none rounded-xl"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button className="px-10 py-2 bg-gradient-to-r from-orange-500 to-pink-500 font-semibold text-white rounded-xl">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
