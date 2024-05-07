import * as Tone from "tone";

const player = new Tone.Player(
  "https://tonejs.github.io/audio/berklee/gong_1.mp3"
).toDestination();
player.autostart = true;

const TonejsPLayer = () => {
  return (
    <div className="flex justify-center items-center mt-10 bg-slate-500">
      <div className="bg-zinc-950">
        <script>
          var dial = new Nexus.Dial('#dial') var number = new
          Nexus.Number('#number') number.link(dial)
        </script>
        <button onClick={() => Tone.start()}>start</button>
      </div>
    </div>
  );
};

export default TonejsPLayer;
