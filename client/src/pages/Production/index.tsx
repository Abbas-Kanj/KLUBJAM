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
  return (
    <div className="flex flex-col mx-auto items-center justify-center">
      <div className="w-28 h-28 bg-black" onClick={playC4}>
        <h1>A</h1>
      </div>
    </div>
  );
};

export default Production;
