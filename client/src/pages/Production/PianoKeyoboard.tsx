import { useState } from "react";
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

interface PianoProps {
  setOpenPianoKeyboard: (open: boolean) => void;
}

const PianoKeyboard: React.FC<PianoProps> = ({ setOpenPianoKeyboard }) => {
  window.addEventListener("keydown", (event: KeyboardEvent) => {
    playNote(event);
  });

  const [draggableNote, setDraggableNote] = useState("");

  const handleNoteDragStart = (note: string) => {
    setDraggableNote(note);
  };

  const handleNoteDragEnd = async (note: string) => {
    if (draggableNote !== note) {
      try {
        console.log("Moved note:", note);
        // Logic to move the note
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Change container");
    }
    setDraggableNote("");
  };

  const handleNoteDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const container = event.target as HTMLDivElement;

    const noteElement = document.createElement("div");
    noteElement.textContent = draggableNote;
    noteElement.id = draggableNote;
    noteElement.draggable = true;
    noteElement.addEventListener("dragstart", () =>
      handleNoteDragStart(draggableNote)
    );
    noteElement.addEventListener("dragend", () =>
      handleNoteDragEnd(draggableNote)
    );
    container.appendChild(noteElement);
  };

  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <p
        className=" font-bold text-[20px] cursor-pointer top-4 right-4 absolute"
        onClick={() => setOpenPianoKeyboard(false)}
      >
        X
      </p>
      <div className="flex items-center w-[1000px] h-fit rounded-xl bg-background">
        <div className="flex justify-center flex-col p-4 ">
          <div
            className="w-[180px] bg-neutral-300 text-black text-right p-1"
            onClick={playC4}
            draggable="true"
            onDragStart={() => handleNoteDragStart("C4")}
            onDragEnd={() => handleNoteDragEnd("C4")}
          >
            C4
          </div>
          <div
            className="text-white bg-black w-[120px] z-10 mr-[-10px] ml-[-1px] mt-[-10px] mb-[-5px] p-1"
            onClick={playDb4}
            draggable="true"
            onDragStart={() => handleNoteDragStart("Db4")}
            onDragEnd={() => handleNoteDragEnd("Db4")}
          >
            Db4
          </div>
          <div
            className="w-[180px] bg-neutral-300 text-black text-right p-1"
            onClick={playD4}
            draggable="true"
            onDragStart={() => handleNoteDragStart("D4")}
            onDragEnd={() => handleNoteDragEnd("D4")}
          >
            D4
          </div>
          <div
            className="text-white bg-black w-[120px] z-10 mr-[-10px] ml-[-1px] mt-[-10px] mb-[-5px] p-1"
            onClick={playEb4}
            draggable="true"
            onDragStart={() => handleNoteDragStart("Eb4")}
            onDragEnd={() => handleNoteDragEnd("Eb4")}
          >
            Eb4
          </div>
          <div
            className="w-[180px] bg-neutral-300 text-black text-right p-1"
            onClick={playE4}
            draggable="true"
            onDragStart={() => handleNoteDragStart("E4")}
            onDragEnd={() => handleNoteDragEnd("E4")}
          >
            E4
          </div>
          <div
            className="text-white bg-black w-[120px] z-10 mr-[-10px] ml-[-1px] mt-[-10px] mb-[-5px] p-1"
            onClick={playF4}
            draggable="true"
            onDragStart={() => handleNoteDragStart("F4")}
            onDragEnd={() => handleNoteDragEnd("F4")}
          >
            F4
          </div>
          <div
            className="w-[180px] bg-neutral-300 text-black text-right p-1"
            onClick={playGb4}
            draggable="true"
            onDragStart={() => handleNoteDragStart("Gb4")}
            onDragEnd={() => handleNoteDragEnd("Gb4")}
          >
            Gb4
          </div>
          <div
            className="text-white bg-black w-[120px] z-10 mr-[-10px] ml-[-1px] mt-[-10px] mb-[-5px] p-1"
            onClick={playG4}
            draggable="true"
            onDragStart={() => handleNoteDragStart("G4")}
            onDragEnd={() => handleNoteDragEnd("G4")}
          >
            G4
          </div>
          <div
            className="w-[180px] bg-neutral-300 text-black text-right p-1"
            onClick={playAb4}
            draggable="true"
            onDragStart={() => handleNoteDragStart("Ab4")}
            onDragEnd={() => handleNoteDragEnd("Ab4")}
          >
            Ab4
          </div>
          <div
            className="text-white bg-black w-[120px] z-10 mr-[-10px] ml-[-1px] mt-[-10px] mb-[-5px] p-1"
            onClick={playA4}
            draggable="true"
            onDragStart={() => handleNoteDragStart("A4")}
            onDragEnd={() => handleNoteDragEnd("A4")}
          >
            A4
          </div>
          <div
            className="w-[180px] bg-neutral-300 text-black text-right p-1"
            onClick={playBb4}
            draggable="true"
            onDragStart={() => handleNoteDragStart("Bb4")}
            onDragEnd={() => handleNoteDragEnd("Bb4")}
          >
            Bb4
          </div>
          <div
            className="text-white bg-black w-[120px] z-10 mr-[-10px] ml-[-1px] mt-[-10px] mb-[-5px] p-1"
            onClick={playB4}
            draggable="true"
            onDragStart={() => handleNoteDragStart("B4")}
            onDragEnd={() => handleNoteDragEnd("B4")}
          >
            B4
          </div>
          <div
            className="w-[180px] bg-neutral-300 text-black text-right p-1"
            onClick={playC5}
            draggable="true"
            onDragStart={() => handleNoteDragStart("C5")}
            onDragEnd={() => handleNoteDragEnd("C5")}
          >
            C5
          </div>
        </div>
        <div>
          <div
            className="border border-dashed border-primary flex items-center h-[326px] w-[770px] p-1 gap-1"
            onDrop={(e) => handleNoteDrop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <div className="border border-dashed border-primary flex flex-col p-1 h-[320px] w-[100px] justify-start items-start gap-1"></div>
            <div className="border border-dashed border-primary flex flex-col p-1 h-[320px] w-[100px] justify-start items-start gap-1"></div>
            <div className="border border-dashed border-primary flex flex-col p-1 h-[320px] w-[100px] justify-start items-start gap-1"></div>
            <div className="border border-dashed border-primary flex flex-col p-1 h-[320px] w-[100px] justify-start items-start gap-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PianoKeyboard;
