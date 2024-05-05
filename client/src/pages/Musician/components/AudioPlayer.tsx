import song from "../../../Audio/As You Fade Away - NEFFEX.mp3";
import song2 from "../../../Audio/Enough - NEFFEX.mp3";
import song3 from "../../../Audio/Immortal - NEFFEX.mp3";
import song4 from "../../../Audio/Play Dead - NEFFEX.mp3";
import song5 from "../../../Audio/Winning - NEFFEX.mp3";
import { useState, useRef, useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { Slider, Stack, Paper as unStyledPaper } from "@mui/material";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [index, setIndex] = useState(0);
  const [volume, setVolume] = useState(30);
  const [mute, setMute] = useState(false);

  const playlist = [song, song2, song3, song4, song5];

  const [currentSong] = useState(playlist[index]);

  const audioPlayer = useRef<HTMLAudioElement>(new Audio());
  const progressBar = useRef<HTMLInputElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current?.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current?.pause();
      if (typeof animationRef.current === "number") {
        cancelAnimationFrame(animationRef.current);
      }
    }
  };

  const whilePlaying = () => {
    if (progressBar.current && audioPlayer.current) {
      progressBar.current.value = audioPlayer.current.currentTime.toString();
      changePlayerCurrentTime();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const changeRange = () => {
    if (progressBar.current && audioPlayer.current) {
      audioPlayer.current.currentTime = parseFloat(progressBar.current.value);
    }
    changePlayerCurrentTime();
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    const handleTimeUpdate = () => {
      setDuration(
        Math.floor(
          audioPlayer.current.duration - audioPlayer.current.currentTime
        )
      );
    };

    audioPlayer.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioPlayer.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [
    audioPlayer?.current?.onloadedmetadata,
    audioPlayer?.current?.readyState,
  ]);

  const calculateTime = (secs: any) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const changePlayerCurrentTime = () => {
    if (progressBar.current) {
      const currentTime = parseFloat(progressBar.current.value);
      const newProgress = (currentTime / duration) * 100 + "%";
      progressBar.current.style.setProperty("--seek-before-width", newProgress);
      setCurrentTime(currentTime);
    }
  };

  const backThirty = () => {
    if (progressBar.current) {
      progressBar.current.value = (
        Number(progressBar.current.value) - 30
      ).toString();
    }
    changeRange();
  };

  const forwardThirty = () => {
    if (progressBar.current) {
      progressBar.current.value = (
        Number(progressBar.current.value) + 30
      ).toString();
    }
    changeRange();
  };

  const toggleSkipForward = () => {
    if (index >= playlist.length - 1) {
      setIndex(0);
      audioPlayer.current.src = playlist[0];
      audioPlayer.current.play();
    } else {
      setIndex((prev) => prev + 1);
      audioPlayer.current.src = playlist[index + 1];
      audioPlayer.current.play();
    }
  };

  const toggleSkipBackward = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      audioPlayer.current.src = playlist[index - 1];
      audioPlayer.current.play();
    }
  };

  function VolumeBtn() {
    return mute ? (
      <VolumeOffIcon
        sx={{ color: "silver", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 20 ? (
      <VolumeMuteIcon
        sx={{ color: "silver", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 75 ? (
      <VolumeDownIcon
        sx={{ color: "silver", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    ) : (
      <VolumeUpIcon
        sx={{ color: "silver", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    );
  }

  return (
    <div className="w-screen flex justify-evenly items-center bg-black h-[80px] left-[0.02em] right-[0.02em] ">
      <audio
        ref={audioPlayer}
        src={currentSong}
        preload="metadata"
        muted={mute}
      ></audio>
      <button onClick={backThirty}>
        <BsArrowLeftShort />
        30
      </button>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "25%",
          alignItems: "center",
        }}
      >
        <VolumeBtn></VolumeBtn>
        <Slider
          min={0}
          value={volume}
          max={100}
          onChange={(e, value) => {
            setVolume(value as number);
            audioPlayer.current.volume = (value as number) / 100;
          }}
          onChangeCommitted={(e, value) => {
            setVolume(value as number);
            audioPlayer.current.volume = (value as number) / 100;
          }}
        />
      </Stack>

      <button onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button onClick={forwardThirty}>
        30 <BsArrowRightShort />
      </button>
      <div>{calculateTime(currentTime)}</div>
      <div>
        <input
          type="range"
          defaultValue={0}
          ref={progressBar}
          onChange={changeRange}
        />
      </div>
      <div>{duration && !isNaN(duration) && calculateTime(duration)}</div>
      <button onClick={toggleSkipBackward}>
        <SkipPreviousIcon />
      </button>
      <button onClick={toggleSkipForward}>
        <SkipNextIcon />
      </button>
    </div>
  );
};

export default AudioPlayer;