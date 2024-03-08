"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Letter from "./Letter";
import { scrollIntoView } from "@/utils/scroller";

const Hero = ({ show, setShowImageSlider }) => {
  return (
    <div
      id="hero-section"
      className=" min-h-screen bg-pink-200  relative overflow-hidden  "
    >
      <div className="w-full min-h-screen absolute z-[1] flex flex-col gap-4 items-center justify-center">
        <span className=" text-8xl p-4 font-extrabold  text-pink-400 bg-white rounded-xl shadow-lg shadow-pink-200 z-[9] ">
          {show && (
            <TypeAnimation
              sequence={[
                "WE ARE",
                900,
                "WE ARE BRAVE 👩‍🚀",
                1000,
                "WE ARE BEAUTY 👩‍🎨",
                800,
                "WE ARE WOMEN 👒",
                1500,
                () => {
                  scrollIntoView("image-slider");
                  setShowImageSlider(true);
                },
              ]}
            />
          )}
        </span>
      </div>

      <Letter showThankyou={true} />
    </div>
  );
};

export default Hero;
