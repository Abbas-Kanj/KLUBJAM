import React, { useState } from "react";

interface SequencerProps {
  setOpenStepSequencer: (open: boolean) => void;
}

const StepSequencer: React.FC<SequencerProps> = ({ setOpenStepSequencer }) => {
  const notes = Array(64).fill("");
  const [bpm, setBpm] = useState(120);

  const handleBpmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBpm(parseInt(event.target.value));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <p
        className=" font-bold text-[20px] cursor-pointer top-4 right-4 absolute"
        onClick={() => setOpenStepSequencer(false)}
      >
        X
      </p>
      <div className=" items-center w-[1000px] h-fit rounded-xl bg-background">
        <div className="bpm-controls">
          <label htmlFor="bpm">{bpm}BPM</label>
          <input
            type="range"
            min="60"
            max="240"
            value={bpm}
            onChange={handleBpmChange}
          />
          <button>Play</button>
          <button>Stop</button>
        </div>
        <div className="sequencer">
          {notes.map((note, i) => (
            <div key={i} className={`note ${i == 0 ? "active" : ""}`}>
              {note}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepSequencer;
