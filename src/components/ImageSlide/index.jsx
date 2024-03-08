"use client";
import React, { Fragment } from "react";
import "./slide.css";
import { HiArrowDown } from "react-icons/hi";

import images from "./stocks";
import Image from "next/image";
import { scrollIntoView } from "@/utils/scroller";

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
const ImageSlide = ({ showImageSlide, ref, setShowThankyou }) => {
  return (
    <div id="image-slider" className="w-full bg-pink-200 flex-col lg:flex-row ">
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
            <button
              onClick={() => {
                setShowThankyou(true);
                scrollIntoView("hero-section");
              }}
              className="btn bg-[rgba(255,255,255,.6)] hover:bg-white m-2 rounded-full absolute bottom-0 left-0 text-pink-400"
            >
              <HiArrowDown />
            </button>
            <span className="text-4xl font-extrabold bg-[rgba(255,255,255,.8)] backdrop-blur-lg border-[2px] border-[1px] border-white text-pink-600 p-4 rounded-2xl hover:shadow-pink-300 shadow-none transition-all ease-in-out duration-150 cursor-pointer relative gallery_item shadow-2xl mx-4 ">
              <p className="font-light italic">Nữ nhà FIT giỏi lắm luôn á!</p>
              <span className="text-4xl">- FIT</span>
            </span>

            <div class="gallery ">
              {/* Split images into 3 parts */}
              <div className="gallery_line">
                {images.slice(0, 6).map(({ src, alt }, i) => (
                  <>
                    <div className="relative">
                      <span className="absolute top-0 bg-white top-0 rounded-xl text-sm p-2 m-4 font-bold">
                        {alt}{" "}
                        {i == 1
                          ? "🌻"
                          : flower_emojis[i % flower_emojis.length]}
                      </span>
                      <Image alt={alt} width={"200"} src={src} />
                    </div>
                  </>
                ))}
              </div>
              <div className="gallery_line">
                {images.slice(6, 12).map(({ src, alt }, i) => (
                  <>
                    <div className="relative">
                      <span className="absolute top-0 bg-white top-0 rounded-xl text-sm p-2 m-4 font-bold">
                        {alt}{" "}
                        {i == 1
                          ? "🌻"
                          : flower_emojis[i % flower_emojis.length]}
                      </span>
                      <Image width={"200"} src={src} />
                    </div>
                  </>
                ))}
              </div>
              <div className="gallery_line">
                {images.slice(13, 19).map(({ src, alt }, i) => (
                  <>
                    <div className="relative">
                      <span className="absolute top-0 bg-white top-0 rounded-xl text-sm p-2 m-4 font-bold">
                        {alt}{" "}
                        {i == 1
                          ? "🌻"
                          : flower_emojis[i % flower_emojis.length]}
                      </span>
                      <Image width={"200"} src={src} />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};
export default ImageSlide;
