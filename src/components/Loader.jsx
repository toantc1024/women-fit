"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Loader({ showEnding, setShowEnding, isDoneIntro }) {
  const [countdown, setCountdown] = useState(10);

  const [deadlock, setDeadlock] = useState(true);

  useEffect(() => {
    if (deadlock) return;
    const interval = setInterval(() => {
      if (countdown === 0) {
        setShowEnding(true);
        // Set playing MUSIC!!!
        let audio = document.getElementById("background-music");

        audio.play();
        return clearInterval(interval);
      } else {
        setCountdown(countdown - 1);
      }
      // Set background to random color
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown, deadlock]);

  const colors = [
    "bg-pink-400",
    "bg-pink-500",
    "bg-orange-400",
    "bg-green-400",
    "bg-sky-400",
    "bg-blue-400",
    "bg-indigo-400",
    "bg-purple-400",
    "bg-rose-400",
    "bg-red-400",
    "bg-red-400",
  ];

  return (
    <div
      className={`h-screen flex items-center justify-center ${
        colors[countdown]
      } absolute top-0 bottom-0 z-[9999] w-full ${
        isDoneIntro && "hidden"
      } transition-all ease-in-out duration-150 `}
    >
      <audio id="countdown-audio" className="hidden" src={"./countdown.mp3"} />
      <div className="flex h-full w-full items-center justify-center relative ">
        {deadlock && (
          <button
            onClick={() => {
              setDeadlock(false);
              document.getElementById("countdown-audio").play();
              // Start playing countdown
            }}
            className="btn btn-base flex items-center justify-center absolute h-48 px-24 rounded-full z-[999]  text-8xl"
          >
            <span>START</span>
          </button>
        )}

        <div
          className={`grid grid-flow-col transition-all ease-in-out duration-150 gap-5 text-center auto-cols-max  ${
            isDoneIntro && "hidden"
          }`}
        >
          <div className="flex flex-col p-2 rounded-box">
            {showEnding ? (
              <div className="absolute top-0 bottom-0 left-0 bg-pink-400  right-0 z-[9999] flex items-center justify-center">
                <span className="text-9xl font-bold text-white ">
                  <TypeAnimation
                    sequence={[
                      "🙄",
                      2000,
                      "LÀ CON GÁI",
                      900,
                      "LÀ CON GÁI ...",
                      900,
                      "THẬT TUYỆT 😊",
                      1000,
                      "MỘT MÓN QUÀ NHỎ TỪ FIT 💐",
                    ]}
                  />
                </span>
              </div>
            ) : (
              <span className={`countdown text-white  font-bold text-[12rem]`}>
                <span style={{ "--value": countdown }}></span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
