import React, { useState, useRef } from "react";
import * as Tone from "tone";

const Microphone: React.FC = () => {
  const [initialized, setInitialized] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState<Tone.Player | null>(null);

  const mic = useRef<Tone.UserMedia | null>(null);
  const recorder = useRef<Tone.Recorder | null>(null);

  const handleRecClick = async () => {
    await Tone.context.resume();

    if (!initialized) {
      mic.current = new Tone.UserMedia();
      recorder.current = new Tone.Recorder();
      mic.current.connect(recorder.current);
      await mic.current.open();
      setInitialized(true);
    }

    if (isRecording) {
      const data = await recorder.current!.stop();
      const blobUrl = URL.createObjectURL(data);
      const newPlayer = new Tone.Player(blobUrl, () => {
        setIsPlaying(false);
      }).toDestination();
      setPlayer(newPlayer);
      setIsRecording(false);
    } else {
      recorder.current!.start();
      setIsRecording(true);
    }
  };

  const handlePlayClick = () => {
    if (isPlaying) {
      player!.stop();
      setIsPlaying(false);
    } else {
      player!.start();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-black">
      <button
        type="button"
        id="start_btn"
        onClick={handleRecClick}
        disabled={!Tone.UserMedia.supported}
      >
        {isRecording ? "Stop" : "Record"}
      </button>
      <button
        type="button"
        id="play_btn"
        onClick={handlePlayClick}
        disabled={!player}
      >
        {isPlaying ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Microphone;
