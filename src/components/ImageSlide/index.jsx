"use client";
import React, { Fragment } from "react";
import "./slide.css";
import { HiArrowDown } from "react-icons/hi";

import images from "./stocks";
import Image from "next/image";

const flower_emojis = [
  "🌸",
  "🌼",
  "🌺",
  "🌷",
  "🌹",
  "🌻",
  "💐",
  "🌾",
  "🍄",
  "🌰",
];
const ImageSlide = ({ ref, showImageSlide = true, setShowThankyou }) => {
  return (
    <div className="w-full bg-pink-200 flex-col lg:flex-row ">
      <div
        ref={ref}
        id="image-slide-section"
        className="h-screen overflow-hidden flex items-center justify-between px-32 relative "
      >
        {showImageSlide && (
          <Fragment>
            <div className="transition-all ease-in-out duration-150 absolute border-[1px] rounded-full gallery_item bottom-0 left-0 text-[10rem] flex items-center justify-center bg-[rgba(255,255,255,.2)] w-[300px] h-[300px] ">
              🌸
            </div>

            <span className="text-6xl font-extrabold bg-[rgba(255,255,255,.8)] backdrop-blur-lg border-[2px] border-[1px] border-white text-pink-600 p-4 rounded-2xl hover:shadow-pink-300 shadow-none transition-all ease-in-out duration-150 cursor-pointer relative gallery_item shadow-2xl ">
              <p className="font-light italic">Nữ nhà FIT giỏi lắm à nha!</p>
              <span className="text-4xl">- FIT</span>
            </span>
            <div class="gallery ">
              {/* Split images into 3 parts */}
              {[0, 5, 11].map((item) => {
                return (
                  <div class="gallery_line">
                    {images.slice(item, item + 6).map(({ src, alt }, i) => (
                      <div className="relative">
                        <span className="absolute top-0 bg-white top-0 rounded-xl p-4 m-4 font-bold">
                          {alt}{" "}
                          {i == 1
                            ? "🌻"
                            : flower_emojis[i % flower_emojis.length]}
                        </span>
                        <Image src={src} />
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};
export default ImageSlide;
