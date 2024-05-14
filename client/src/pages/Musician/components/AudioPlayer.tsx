import { useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";

const AudioPlayer = () => {
  const music = useAppSelector((state) => state.music.playing);
  const playlists = useAppSelector((state) => state.music.playlists);
  const dispatch = useAppDispatch();

  const [isRepeatClicked, setRepeatClick] = useState(false);
  const [isPrevClicked, setPrevClicked] = useState(false);
  const [isNextClicked, setNextClicked] = useState(false);
  const [isPlaying, setPlayPauseClicked] = useState(false);
  const [isVolumeClicked, setVolumeClicked] = useState(false);
  const [volume, setVolume] = useState(50);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currTime, setCurrTime] = useState(0);
  const [bannerToggle, setBannerToggle] = useState(false);

  const audioElement = useRef<HTMLAudioElement | null>(null);

  const handleSeekChange = (event: any, newValue: any) => {
    if (audioElement.current) {
      audioElement.current.currentTime = (newValue * duration) / 100;
      setSeekTime(newValue);
    }
  };

  const handleVolumeChange = (event: any, newValue: any) => {
    setVolume(newValue);
  };

  const handleBannerToggle = () => {
    setBannerToggle(!bannerToggle);
  };

  function formatTime(secs: any) {
    const t = new Date(1970, 0, 1);
    t.setSeconds(secs);
    let s = t.toTimeString().substr(0, 8);
    if (secs > 86399)
      s = Math.floor((+t - +new Date(1970, 0, 1)) / 3600000) + s.substr(2);
    return s.substring(3);
  }

  const handleToggle = (type: any, val: any) => {
    switch (type) {
      case "repeat":
        setRepeatClick(val);
        break;
      case "prev":
        setPrevClicked(val);
        break;
      case "play-pause":
        setPlayPauseClicked(val);
        break;
      case "next":
        setNextClicked(val);
        break;
      case "volume":
        setVolumeClicked(val);
        break;
      default:
        break;
    }
  };
};

export default AudioPlayer;
