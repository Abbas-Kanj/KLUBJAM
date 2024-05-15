import * as Tone from "tone";

const TonejsPLayer = () => {
  const synth = new Tone.Synth();
  const audioContext = Tone.Context;
  const notes = "CDEFGAB".split("").map((n) => `${n}4`);
  let note = 0;
  synth.toDestination();
  Tone.Transport.scheduleRepeat((time) => {
    synth.triggerAttack(notes[note % notes.length]);
    note++;
  }, "4n");
  // Tone.Transport.start();

  return (
    <div className="flex justify-center items-center mt-10 bg-slate-500 w-screen h-screen">
      <div className="bg-zinc-950 w-fit">
        <audio src=""></audio>
      </div>
    </div>
  );
};

export default TonejsPLayer;
