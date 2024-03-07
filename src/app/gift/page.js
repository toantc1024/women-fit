"use client";

import { useState } from "react";

// Generate random background color
const possible_colors = ["bg-pink-200", "bg-rose-200", "bg-red-200"];

const random_bg = () =>
  possible_colors[Math.floor(Math.random() * possible_colors.length)];

const emojis = [
  "🎁",
  "🎈",
  "🌷",
  "🌹",
  "🌺",
  "🌸",
  "🌼",
  "🌻",
  "🍄",
  "🌰",
  "👒",
];

const INITIAL_GIFT_LIST = [
  {
    id: "1",
    name: "Gift 1",
    description: "Gift 1 description",
  },
  {
    id: "2",
    name: "Gift 2",
    description: "Gift 2 description",
  },
    
].map((gift, i) => ({
  ...gift,
  bg: random_bg(),
  emoji: emojis[i % emojis.length],
  is_open: false,
}));

export default function Gift() {
  const [giftList, setGiftList] = useState(INITIAL_GIFT_LIST);
  return (
    <div className="w-full min-h-screen py-24 bg-white">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {giftList.map((_, i) => (
          <div
            onClick={() => {
              if (giftList[i].is_open) {
                return;
              }
              const newGiftList = [...giftList];
              newGiftList[i].is_open = !newGiftList[i].is_open;
              setGiftList(newGiftList);

              // Close all other gifts

              setGiftList(newGiftList);
            }}
            className={`w-40 ${
              giftList[i].is_open
                ? "bg-white"
                : "bg-pink-200 hover:bg-pink-300 "
            }  hover:scale-[1.05] active:scale-[0.9] transition-all ease-in-out duration-200  h-40 rounded-xl shadow-pink-300 shadow-lg cursor-pointer flex items-center justify-center text-[4rem]`}
          >
            {emojis[i % emojis.length]}
          </div>
        ))}
      </div>
    </div>
  );
}
