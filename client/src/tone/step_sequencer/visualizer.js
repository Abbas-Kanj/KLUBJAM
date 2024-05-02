import * as Tone from "tone";

let bpm = 120;
let beat = 0;
let isPlaying = false;

const synths = [
  new Tone.Synth().toDestination(),
  new Tone.Synth().toDestination(),
  new Tone.Synth().toDestination(),
  new Tone.Synth().toDestination(),
];

// Dorian scale notes
const scaleOfNotes = ["C4", "D4", "Eb4", "F4"];

let rows = [
  Array.from({ length: 16 }, (_, i) => ({
    note: scaleOfNotes[3],
    active: false,
  })),
  Array.from({ length: 16 }, (_, i) => ({
    note: scaleOfNotes[2],
    active: false,
  })),
  Array.from({ length: 16 }, (_, i) => ({
    note: scaleOfNotes[1],
    active: false,
  })),
  Array.from({ length: 16 }, (_, i) => ({
    note: scaleOfNotes[0],
    active: false,
  })),
];

let beatIndicators = Array.from({ length: 16 }, (_, i) => i);

Tone.Transport.scheduleRepeat((time) => {
  rows.forEach((row, index) => {
    let synth = synths[index];
    let note = row[beat];
    if (note.active) synth.triggerAttackRelease(note.note, "16n", time);
  });
  beat = (beat + 1) % 16;
}, "16n");

const handleNoteClick = (rowIndex, noteIndex) => {
  rows[rowIndex][noteIndex].active = !rows[rowIndex][noteIndex].active;
};

const handlePlayClick = () => {
  if (!isPlaying) Tone.start();
  Tone.Transport.bpm.value = bpm;
  Tone.Transport.start();
  isPlaying = true;
};

const handleStopClick = () => {
  Tone.Transport.stop();
  isPlaying = false;
};

$: if (isPlaying) {
  Tone.Transport.bpm.value = bpm;
}

export { handleNoteClick, handlePlayClick, handleStopClick };
