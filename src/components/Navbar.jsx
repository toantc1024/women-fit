"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HiFilm, HiMusicNote } from "react-icons/hi";

const Navbar = () => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const router = useRouter();

  // fade out audio func

  const [iterval, setIterval] = useState(null);
  const fadeOutAudio = (audio) => {
    if (iterval) clearInterval(iterval);
    let fadePoint = audio.duration - 2; // start of the fade
    let fadeAudio = setInterval(function () {
      // Only fade if past the fade out point or not at zero already
      if ((audio.volume > 0.05) & (audio.currentTime >= fadePoint)) {
        audio.volume -= 0.05;
      } else {
        clearInterval(fadeAudio);
      }
    }, 200);
    setIterval(fadeAudio);
  };

  useEffect(() => {
    // listen to B key
    window.addEventListener("keydown", (e) => {
      if (e.key === "p") {
        let audio = document.getElementById("background-music");
        // reduced the volume to 0 in 1 second
        fadeOutAudio(audio);
        // Fade out audio

        // Pause audio
        audio.pause();
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "r") {
        let audio = document.getElementById("background-music");
        // reduced the volume to 0 in 1 second
        audio.volume = 1;
        // Pause audio
        audio.play();
      }
    });
  });
  return (
    <div className="fixed z-[9999] navbar bg-pink-400 ">
      <audio
        src={"./music.mp3"}
        controls
        className="hidden"
        id="background-music"
      />
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => router.push("/")}>
              <a>Homepage</a>
            </li>

            <li onClick={() => router.push("/gift")}>
              <a>Gift</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl font-bold text-2xl text-white">
          WOMAN AT FIT
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
