"use client";
import { useScramble } from "use-scramble";

const TitleAnimation = ({ text, subText }) => {
  const { ref, replay } = useScramble({
    text,
    range: [65, 125],
    speed: 1,
    tick: 1,
    step: 5,
    scramble: 5,
    seed: 2,
    chance: 1,
    overdrive: false,
    overflow: false,
  });
  return (
    <>
      <div className="relative">
        <h1
          ref={ref}
          onMouseOver={replay}
          onFocus={replay}
          className="text-6xl md:text-8xl font-semibold text-center uppercase text-gray-600"
        ></h1>
        <div className="absolute top-3 md:top-6 left-0 right-0 text-center">
          <h1 className="textxl md:text-3xl font-semibold text-orange-500">{subText}</h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange-500 to-pink-500"></div>
        </div>
      </div>
    </>
  );
};

export default TitleAnimation;
