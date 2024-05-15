import * as Tone from "tone";

const TonejsPLayer = () => {
  const synth = new Tone.Synth();
  const audioContext = Tone.Context;
  synth.toDestination();

  const notes = "CDEFGAB".split("").map((n) => `${n}4`);
  let note = 0;
  Tone.Transport.scheduleRepeat((time) => {
    if (note === 0) {
    }
    if (note > notes.length) {
      synth.triggerRelease(time);
      Tone.Transport.stop();
    } else synth.triggerAttack(notes[note], time);
    note++;
  }, "4n");
  Tone.Transport.start();

  return (
    <div className="flex justify-center items-center mt-10 bg-slate-500 w-screen h-screen">
      <div className="bg-zinc-950 w-fit">
        <audio src=""></audio>
        <button onClick={() => {}}>start</button>
      </div>
    </div>
  );
};

export default TonejsPLayer;
