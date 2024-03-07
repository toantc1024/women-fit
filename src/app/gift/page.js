"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [countdown, setCountdown] = useState(10);
  const [background, setBackground] = useState("bg-pink-300");

  const [showEnding, setShowEnding] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown === 0) {
        setShowEnding(true);
        return clearInterval(interval);
      } else {
        setCountdown(countdown - 1);
      }
      // Set background to random color
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  const colors = [
    "bg-pink-50",
    "bg-pink-100",
    "bg-pink-200",
    "bg-pink-300",
    "bg-pink-400",
    "bg-pink-500",
    "bg-pink-600",
    "bg-pink-700",
    "bg-pink-800",
    "bg-pink-900",
    "bg-pink-900",
    "bg-pink-900",
  ];

  return (
    <div
      className={`h-screen flex items-center justify-center ${colors[countdown]} absolute top-0 bottom-0 z-[9999] w-full`}
    >
      {countdown}
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 rounded-box">
          {showEnding ? (
            <div className="absolute top-0 bottom-0 left-0 bg-pink-400  right-0 z-[9999] flex items-center justify-center">
              <span className="text-9xl font-bold text-white ">
                LÀ CON GÁI <br /> THẬT TUYỆT 🎉
              </span>
            </div>
          ) : (
            <span className={`countdown text-white  font-bold text-9xl`}>
              <span style={{ "--value": countdown }}></span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
