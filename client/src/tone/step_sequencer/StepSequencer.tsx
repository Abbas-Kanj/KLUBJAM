import React, { useEffect, useRef, useState } from "react";
import * as Tone from "tone";

interface SequencerProps {
  setOpenStepSequencer: (open: boolean) => void;
}

const StepSequencer: React.FC<SequencerProps> = ({ setOpenStepSequencer }) => {
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  const [beat, setBeat] = useState(0);
  const [rows, setRows] = useState([
    Array.from({ length: 16 }, () => ({ note: "F4", active: false })),
    Array.from({ length: 16 }, () => ({ note: "Eb4", active: false })),
    Array.from({ length: 16 }, () => ({ note: "D4", active: false })),
    Array.from({ length: 16 }, () => ({ note: "C4", active: false })),
  ]);

  const rowsRef = useRef(rows);
  rowsRef.current = rows;

  const synths = [
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
  ];

  useEffect(() => {
    Tone.Transport.scheduleRepeat((time) => {
      rowsRef.current.forEach((row, index) => {
        const synth = synths[index];
        const note = row[beat];
        if (note.active) synth.triggerAttackRelease(note.note, "16n", time);
      });
      setBeat((prevBeat) => (prevBeat + 1) % 16);
    }, "16n");

    return () => {
      Tone.Transport.cancel();
    };
  }, [beat]);

  const handleBpmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBpm(parseInt(event.target.value));
  };

  const handleNoteClick = (rowIndex: number, noteIndex: number) => {
    const newRows = rows.map((row, i) =>
      row.map((note, j) =>
        i === rowIndex && j === noteIndex
          ? { ...note, active: !note.active }
          : note
      )
    );
    setRows(newRows);
  };

  const handlePlayClick = () => {
    if (!isPlaying) Tone.start();
    Tone.Transport.bpm.value = bpm;
    Tone.Transport.start();
    setIsPlaying(true);
  };

  const handleStopClick = () => {
    Tone.Transport.stop();
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying) {
      Tone.Transport.bpm.value = bpm;
    }
  }, [isPlaying, bpm]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <p
        className="font-bold text-[20px] cursor-pointer top-4 right-4 absolute"
        onClick={() => {
          setOpenStepSequencer(false);
          Tone.Transport.stop();
        }}
      >
        X
      </p>
      <div className="items-center w-fit h-fit rounded-xl bg-background p-4">
        <div className="bpm-controls flex gap-4">
          <label htmlFor="bpm">{bpm} BPM</label>
          <input
            type="range"
            min="60"
            max="240"
            value={bpm}
            onChange={handleBpmChange}
          />
          {isPlaying ? (
            <button onClick={handleStopClick}>Stop</button>
          ) : (
            <button onClick={handlePlayClick}>Play</button>
          )}
        </div>
        <div className="sequencer">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className={`beat-indicator ${i === beat ? "live" : ""}`}
            ></div>
          ))}
          {rows.map((row, i) =>
            row.map((note, j) => (
              <button
                key={j}
                onClick={() => handleNoteClick(i, j)}
                className={`note ${note.active ? "active" : ""} ${
                  j % 4 === 0 ? "first-beat-of-the-bar" : ""
                }`}
              ></button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default StepSequencer;
