"use client";
import { scrollIntoView } from "@/utils/scroller";
import React from "react";
import { HiArrowDown, HiHeart } from "react-icons/hi";

const Intro = ({ setShowThankyou }) => {
  return (
    <div className="h-screen ">
      <div className="hero min-h-screen bg-gradient-to-b from-pink-400 to-pink-200 relative">
        <div className="hero-content text-center ">
          <div className="max-w-md">
            <div className="flex items-center justify-center ">
              <h1 className="text-8xl text-pink-400 font-bold shadow-xl shadow-pink-200 w-60 h-40 flex items-center justify-center bg-white rounded-full p-24">
                8/3
              </h1>
            </div>
            <p className="py-6 font-bold  text-6xl text-gray-600 ">
              International <span className="text-pink-400">Women</span> Day
            </p>
            <button
              onClick={() => {
                scrollIntoView("hero-section");
                setShowThankyou(true);
              }}
              className="btn text-4xl text-pink-400 bg-white hover:bg-white rounded-full"
            >
              <HiArrowDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
