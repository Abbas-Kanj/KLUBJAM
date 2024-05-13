import {
  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,
  playC5,
  playNote,
} from "../../tone/instruments/piano/piano";
import "../../tone/instruments/piano/piano.css";

interface PianoProps {
  setOpenPianoKeyboard: (open: boolean) => void;
}

const PianoKeyboard: React.FC<PianoProps> = ({ setOpenPianoKeyboard }) => {
  window.addEventListener("keydown", (event: KeyboardEvent) => {
    playNote(event);
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <p
        className=" font-bold text-[20px] cursor-pointer top-4 right-4 absolute"
        onClick={() => setOpenPianoKeyboard(false)}
      >
        X
      </p>
      <div className="flex flex-col w-[1000px] h-[650px] rounded-xl bg-background">
        <div className="flex justify-center flex-col p-4">
          <div
            className="w-[180px] bg-neutral-300 text-black text-right p-1"
            onClick={playC4}
          >
            C4
          </div>
          <div
            className="text-white bg-black w-[120px] z-10 mr-[-10px] ml-[-1px] mt-[-10px] mb-[-5px] p-1"
            onClick={playDb4}
          >
            Db4
          </div>
          <div
            className="w-[180px] bg-neutral-300 text-black text-right p-1"
            onClick={playD4}
          >
            D4
          </div>
          <div
            className="text-white bg-black w-[120px] z-10 mr-[-10px] ml-[-1px] mt-[-10px] mb-[-5px] p-1"
            onClick={playEb4}
          >
            Eb4
          </div>
          <div
            className="w-[180px] bg-neutral-300 text-black text-right p-1"
            onClick={playE4}
          >
            E4
          </div>
          <div
            className="text-white bg-black w-[120px] z-10 mr-[-10px] ml-[-1px] mt-[-10px] mb-[-5px] p-1"
            onClick={playF4}
          >
            F4
          </div>
          <div
            className="w-[180px] bg-neutral-300 text-black text-right p-1"
            onClick={playGb4}
          >
            Gb4
          </div>
          <div
            className="text-white bg-black w-[120px] z-10 mr-[-10px] ml-[-1px] mt-[-10px] mb-[-5px] p-1"
            onClick={playG4}
          >
            G4
          </div>
          <div
            className="w-[180px] bg-neutral-300 text-black text-right p-1"
            onClick={playAb4}
          >
            Ab4
          </div>
          <div
            className="text-white bg-black w-[120px] z-10 mr-[-10px] ml-[-1px] mt-[-10px] mb-[-5px] p-1"
            onClick={playA4}
          >
            A4
          </div>
          <div
            className="w-[180px] bg-neutral-300 text-black text-right p-1"
            onClick={playBb4}
          >
            Bb4
          </div>
          <div
            className="text-white bg-black w-[120px] z-10 mr-[-10px] ml-[-1px] mt-[-10px] mb-[-5px] p-1"
            onClick={playB4}
          >
            B4
          </div>
          <div
            className="w-[180px] bg-neutral-300 text-black text-right p-1"
            onClick={playC5}
          >
            C5
          </div>
        </div>
      </div>
    </div>
  );
};

export default PianoKeyboard;
