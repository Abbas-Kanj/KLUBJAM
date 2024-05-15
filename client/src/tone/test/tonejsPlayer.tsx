import * as Tone from "tone";

const TonejsPLayer = () => {
  const recorder = new Tone.Recorder();
  const synth = new Tone.Synth().connect(recorder);
  synth.toDestination();

  const notes = "CDEFGAB".split("").map((n) => `${n}4`);
  let note = 0;
  Tone.Transport.scheduleRepeat(async (time) => {
    if (note === 0) {
      recorder.start();
    }
    if (note > notes.length) {
      synth.triggerRelease(time);
      Tone.Transport.stop();
      const recording = await recorder.stop();
      const url = URL.createObjectURL(recording);
      const anchor = document.createElement("a");
      anchor.download = "recording.webm";
      anchor.href = url;
      anchor.click();
    } else synth.triggerAttack(notes[note], time);
    note++;
  }, "4n");
  Tone.Transport.start();

  return (
    <div className="flex justify-center items-center mt-10 bg-slate-500 w-screen h-screen">
      <div className="bg-zinc-950 w-fit">
        <audio src=""></audio>
        <button
          onClick={() => {
            Tone.start();
          }}
        >
          start
        </button>
      </div>
    </div>
  );
};

export default TonejsPLayer;
