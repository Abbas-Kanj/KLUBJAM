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
} from "../../tone/instruments/piano";

const Production = () => {
  window.addEventListener("keydown", (event: KeyboardEvent) => {
    playNote(event);
  });

  return (
    <div className="flex  w-full h-full justify-center mt-10 items-center mx-auto  bg-greyText">
      <div className="w-8 h-8 bg-black" onClick={playC4}>
        A
      </div>
      <div className="bg-black w-4 h-4" onClick={playDb4}>
        W
      </div>
      <div className="bg-white w-8 h-8" onClick={playD4}>
        S
      </div>
      <div className="bg-black w-4 h-4" onClick={playEb4}>
        E
      </div>
      <div className="bg-white w-8 h-8" onClick={playE4}>
        D
      </div>
      <div className="bg-white w-8 h-8" onClick={playF4}>
        F
      </div>
      <div className="bg-black w-4 h-4" onClick={playGb4}>
        T
      </div>
      <div className="bg-white w-8 h-8" onClick={playG4}>
        G
      </div>
      <div className="bg-black w-4 h-4" onClick={playAb4}>
        Y
      </div>
      <div className="bg-white w-8 h-8" onClick={playA4}>
        H
      </div>
      <div className="bg-black w-4 h-4" onClick={playBb4}>
        U
      </div>
      <div className="bg-white w-8 h-8" onClick={playB4}>
        J
      </div>
      <div className="bg-white w-8 h-8" onClick={playC5}>
        K
      </div>
    </div>
  );
};

export default Production;
