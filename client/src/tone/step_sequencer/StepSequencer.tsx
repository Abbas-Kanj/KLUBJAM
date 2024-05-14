import React from "react";

interface SequencerProps {
  setOpenStepSequencer: (open: boolean) => void;
}

const StepSequencer: React.FC<SequencerProps> = ({ setOpenStepSequencer }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <p
        className=" font-bold text-[20px] cursor-pointer top-4 right-4 absolute"
        onClick={() => setOpenStepSequencer(false)}
      >
        X
      </p>
      <div className="flex items-center w-[1000px] h-fit rounded-xl bg-background">
        <div className="sequencer grid grid-cols-16 gap-5 w-full">
          <div className="note bg-gray-300 text-xs md:text-base w-12 h-12 md:w-16 md:h-16 border border-gray-300 rounded-lg flex justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default StepSequencer;
