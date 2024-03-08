"use client";

import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { text_gift } from "./constants";
import { emojis } from "./Letter";

// Pick random from array func
const pickRandomFromArray = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

const INITIAL_PRIZE = text_gift.map((_, i) => {
  return {
    option: pickRandomFromArray(emojis),
    prize: _,
  };
});
const funny_emojis = ["😜", "🌷", "🤩", "🥳", "🤗", "🤭", "", "💅", "🌼"];

const Game = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [slot, setSlot] = useState(INITIAL_PRIZE);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showWheel, setShowWheel] = useState(true);

  const [currentEmoji, setCurrentEmoji] = useState(
    pickRandomFromArray(funny_emojis)
  );

  useEffect(() => {
    setCurrentEmoji(pickRandomFromArray(funny_emojis));
  }, [showWheel]);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * slot.length);
      setPrizeNumber(newPrizeNumber);
      // Remove element from slot
      const newSlot = slot.filter((_, index) => index !== newPrizeNumber);
      setSlot(newSlot);

      setMustSpin(true);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  overflow-hidden">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={() => setShowWheel(true)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div className="absolute bottom-[0px] right-[-5px] text-6xl  rotate-[-25deg] ">
            {pickRandomFromArray(funny_emojis)}
          </div>
          <h3 className="font-bold text-lg">WHAOO!!!</h3>
          <p className="py-8 text-2xl min-h-40 flex flex-start justify-start">
            {slot[prizeNumber].prize}
          </p>
        </div>
      </dialog>
      {showWheel && (
        <Wheel
          mustStartSpinning={mustSpin}
          fontFamily={"Raleway"}
          radiusLineColor={"#fdf2f8"}
          innerBorderColor={"white"}
          outerBorderColor={"white"}
          fontSize={20}
          spinDuration={0.4}
          prizeNumber={prizeNumber}
          data={slot}
          backgroundColors={["#ec4899", "#8b5cf6", "#f43f5e"]}
          textColors={["#ffffff"]}
          onStopSpinning={() => {
            setMustSpin(false);
            document.getElementById("my_modal_3").showModal();
            setShowWheel(false);
          }}
        />
      )}

      <button className="btn btn-secondary text-4xl" onClick={handleSpinClick}>
        {currentEmoji} Nay tui thấy tui đẹp
      </button>
    </div>
  );
};

export default Game;
