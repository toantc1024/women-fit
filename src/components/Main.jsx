import React from "react";
import ImageSlide from "./ImageSlide";
import Hero from "./Hero";
import Intro from "./Intro";

const Main = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <Intro />
      <ImageSlide />
      <Hero />
    </div>
  );
};

export default Main;
