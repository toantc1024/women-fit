"use client";
import React, { useEffect, useState } from "react";
import ImageSlide from "./ImageSlide";
import Hero from "./Hero";
import Intro from "./Intro";
import Loader from "./Loader";

const Main = () => {
  const [showThankYou, setShowThankyou] = useState(false);
  const [showEnding, setShowEnding] = useState(false);
  const [showImageSlider, setShowImageSlider] = useState(false);
  const [isDoneIntro, setIsDoneIntro] = useState(false);

  useEffect(() => {
    // if showEnding is true, wait for 1 second then set isDoneIntro to true
    if (showEnding) {
      setTimeout(() => {
        setIsDoneIntro(true);
      }, 12000);
    }
  }, [showEnding]);

  return (
    <div className="min-h-screen bg-base-200">
      <Loader
        isDoneIntro={isDoneIntro}
        showEnding={showEnding}
        setShowEnding={(value) => setShowEnding(value)}
      />
      <Intro setShowThankyou={(value) => setShowThankyou(value)} />
      <Hero
        show={showThankYou}
        setShowImageSlider={(value) => setShowImageSlider(value)}
      />
      <ImageSlide showImageSlide={showImageSlider} />
    </div>
  );
};

export default Main;
