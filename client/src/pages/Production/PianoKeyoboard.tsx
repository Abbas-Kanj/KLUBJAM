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
      <div className="flex flex-col w-[1000px] h-[650px] rounded-xl bg-background">
        <div className="piano">
          <div className="white-key" onClick={playC4}>
            A
          </div>
          <div className="black-key" onClick={playDb4}>
            W
          </div>
          <div className="white-key" onClick={playD4}>
            S
          </div>
          <div className="black-key" onClick={playEb4}>
            E
          </div>
          <div className="white-key" onClick={playE4}>
            D
          </div>
          <div className="white-key" onClick={playF4}>
            F
          </div>
          <div className="black-key" onClick={playGb4}>
            T
          </div>
          <div className="white-key" onClick={playG4}>
            G
          </div>
          <div className="black-key" onClick={playAb4}>
            Y
          </div>
          <div className="white-key" onClick={playA4}>
            H
          </div>
          <div className="black-key" onClick={playBb4}>
            U
          </div>
          <div className="white-key" onClick={playB4}>
            J
          </div>
          <div className="white-key" onClick={playC5}>
            K
          </div>
        </div>
      </div>
    </div>
  );
};

export default PianoKeyboard;
