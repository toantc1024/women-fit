"use client";
import React, { Fragment, useState } from "react";
import { TypeAnimation } from "react-type-animation";
export const emojis = [
  "👩‍🏫",
  "👩‍⚕️",
  "👩‍🎓",
  "👩‍🔬",
  "👩‍🚀",
  "👩‍🚒",
  "🌸",
  "🌼",
  "🧕",
  "👩‍🎤",
  "👩‍🎨",
  "👩‍💻",
  "👩‍✈️",
];

const Letter = () => {
  const fx = (x) => {
    return (-1 / 2500) * x * x + (1 / 25) * x;
  };

  // Generate emojies about woman, flower

  return (
    <Fragment>
      {
        <div
          className="h-screen w-screen flex flex-wrap items-center justify-center gap-4 "
          style={{ transform: "rotate3d(-1,1,1, 45deg)" }}
        >
          {[...new Array(111)].map((_, i) => (
            <span
              key={i}
              className={`flex items-center justify-center text-6xl w-[100px] h-[100px] bg-white rounded-xl shadow-2xl shadow-pink-100 transition-all ease-in-out duration-500 `}
              style={{
                opacity: i % 2 == 0 ? 0 : fx(i),
                transform:
                  i % 3 == 0
                    ? "scale(0.9)"
                    : i % 5 == 0
                    ? "scale(1.12)"
                    : "scale(1)",
              }}
            >
              <span className="">{emojis[i % emojis.length]}</span>
            </span>
          ))}
        </div>
      }
    </Fragment>
  );
};

export default Letter;
