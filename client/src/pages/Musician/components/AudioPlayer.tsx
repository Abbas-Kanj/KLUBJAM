import song from "../../../Audio/As You Fade Away - NEFFEX.mp3";
import React, { useState, useRef, useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="w-screen flex justify-evenly items-center bg-black h-[80px] left-[0.02em] right-[0.02em] ">
      <audio src={song}></audio>
      <button>
        <BsArrowLeftShort />
        30
      </button>
      <button onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button>
        30 <BsArrowRightShort />
      </button>
      <div>0:00</div>
      <div>
        <input type="range" />
      </div>
      <div>2:49</div>
    </div>
  );
};

export default AudioPlayer;
