import React, { useState, useRef } from "react";
import * as Tone from "tone";

interface MicroProps {
  SetOpenMicrophoneRecorder: (open: boolean) => void;
}

const Microphone: React.FC<MicroProps> = ({ SetOpenMicrophoneRecorder }) => {
  const [initialized, setInitialized] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState<Tone.Player | null>(null);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);

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
      setRecordedBlob(data);
      const blobUrl = URL.createObjectURL(data);
      const newPlayer = new Tone.Player(blobUrl, () => {
        setIsPlaying(false);
      }).toDestination();
      setPlayer(newPlayer);
      setIsRecording(false);

      mic.current!.close();
      mic.current = null;
      setInitialized(false);
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
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <p
        className="font-bold text-[20px] cursor-pointer top-4 right-4 absolute"
        onClick={() => SetOpenMicrophoneRecorder(false)}
      >
        X
      </p>
      <div className="flex items-center w-fit p-9 h-fit gap-5 rounded-xl bg-background">
        <button
          type="button"
          id="start_btn"
          onClick={handleRecClick}
          disabled={!Tone.UserMedia.supported}
        >
          {isRecording ? "Stop" : "Record"}
        </button>
        {recordedBlob && (
          <a
            href={URL.createObjectURL(recordedBlob)}
            download="recorded_audio.wav"
            className="btn-download"
          >
            Download
          </a>
        )}
        <button
          type="button"
          id="play_btn"
          onClick={handlePlayClick}
          disabled={!player}
        >
          {isPlaying ? "Stop" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default Microphone;
