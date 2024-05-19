import globe from "./assets/icons/globe.svg";
import save from "./assets/icons/save-02.svg";
import back from "./assets/icons/arrow-left.svg";
import backward from "./assets/icons/fast-backward.svg";
import play from "./assets/icons/play-03.svg";
import repeat from "./assets/icons/refresh-01.svg";
import micro from "./assets/icons/microphone-01.svg";
import volume from "./assets/icons/volume-05.svg";
import settings from "./assets/icons/settings (1).svg";
import download from "./assets/icons/download-02.svg";
import elipse from "./assets/icons/Ellipse 41.svg";
import circle from "../assets/Workspace/icons/circle.svg";
import { useState } from "react";
import PianoKeyboard from "../../tone/instruments/piano/PianoKeyoboard";
import StepSequencer from "../../tone/step_sequencer/StepSequencer";
import Microphone from "../../tone/microphone/Microphone";
import Messages from "../../newMessages/Messages";
import * as Tone from "tone";
import { useNavigate } from "react-router-dom";

const Production = () => {
  const [openPianoKeyboard, setOpenPianoKeyboard] = useState(false);
  const [openStepSequencer, setOpenStepSequencer] = useState(false);
  const [openMicrophoneRecorder, SetOpenMicrophoneRecorder] = useState(false);
  const navigate = useNavigate();

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
    Tone.start();
  };

  return (
    <div className="flex justify-center bg-background w-screen h-screen px-[12px] py-[20px]">
      {openPianoKeyboard && (
        <PianoKeyboard
          setOpenPianoKeyboard={setOpenPianoKeyboard}
        ></PianoKeyboard>
      )}
      {openStepSequencer && (
        <StepSequencer
          setOpenStepSequencer={setOpenStepSequencer}
        ></StepSequencer>
      )}
      {openMicrophoneRecorder && (
        <Microphone
          SetOpenMicrophoneRecorder={SetOpenMicrophoneRecorder}
        ></Microphone>
      )}
      <div>
        <div className="flex gap-[10px]">
          <div className="w-[1210px] h-[75px]  flex items-center justify-between px-[18px]">
            <div
              className="border-[2px] border-solid rounded-full border-primary py-1 px-3 hover:opacity-60 cursor-pointer"
              onClick={() => navigate("../Home")}
            >
              <img src={back} alt="" className="" />
            </div>
            <div className="flex gap-[14px] mr-10">
              <div className="border-[2px] rounded-full bg-backgroundDark   px-[18px] py-[6px] font-bold">
                <p>120 BPM</p>
              </div>
              <div className="border-[2px] rounded-full bg-backgroundDark  flex flex-row gap-3 px-10">
                <img src={backward} alt="" className="" />
                <img
                  src={play}
                  alt=""
                  className="cursor-pointer hover:opacity-50"
                  onClick={() => {
                    TonejsPLayer();
                  }}
                />
                <img src={elipse} alt="" className="" />
                <img src={repeat} alt="" className="" />
              </div>

              <div className="border-[2px] rounded-full bg-backgroundDark  px-[18px] py-[6px] font-bold">
                <p>00:00.0</p>
              </div>
            </div>

            <div className="flex gap-2 rounded-full bg-backgroundDark  px-[18px] py-[6px]">
              <img
                src={micro}
                alt=""
                className="cursor-pointer hover:opacity-65"
                onClick={() => SetOpenMicrophoneRecorder(true)}
              />
              <img src={volume} alt="" className="" />
              <input type="range" />
              <p>1.8dB</p>
            </div>
            {/* <div className="flex gap-[10px]">
              <img src={settings} alt="" className="" />
              <img src={download} alt="" className="" />
            </div> */}
            <div></div>
          </div>
          <div className="flex justify-between items-start gap-[9px] mt-3">
            <div className="flex items-center justify-center w-[120px] h-[46px] bg-transparent cursor-pointer pt-[6px] pb-[6px] pl-[15px] pr-[15px] gap-[5px] hover:opacity-70 rounded-full border-[2px] border-solid border-primary">
              <img src={save} alt="" className="w-[28px] h-[28px]" />
              <h2 className="font-bold text-[14px] text-primary">Save</h2>
            </div>
            <div className="flex items-center justify-center w-[120px] h-[46px] bg-primary cursor-pointer pt-[6px] pb-[6px] pl-[15px] pr-[15px] gap-[5px] hover:opacity-70 rounded-full">
              <img src={globe} alt="" className="w-[28px] h-[28px]" />
              <h2 className="font-bold text-[14px]">Publish</h2>
            </div>
          </div>
        </div>
        <div className="flex mt-[9px] gap-[6px]">
          <div className="w-[187px] h-[620px] flex flex-col gap-1 pl-[14px] pt-[14px]">
            <h2
              className="cursor-pointer hover:opacity-55"
              onClick={() => setOpenPianoKeyboard(true)}
            >
              Piano
            </h2>
            <h2
              className="cursor-pointer hover:opacity-55"
              onClick={() => setOpenStepSequencer(true)}
            >
              Step Sequencer
            </h2>
            <h2>Guitar</h2>
            <h2>Beats</h2>
            <h2>Effects</h2>
            <h2>AI Generated Beats</h2>
            <h2>Presets</h2>
          </div>
          <div className="w-[156px] h-[620px] p-[9px] flex flex-col gap-1 bg-backgroundDark">
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
          </div>
          <div className="w-[854px] h-[620px]  p-[6px]">
            <div className="flex">
              <div className="relative bg-opacity-25 border-r border-solid border-primary bg-primary w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">1</p>
              </div>
              <div className="relative bg-opacity-25 border-r border-solid border-primary bg-primary w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">2</p>
              </div>
              <div className="relative bg-opacity-25 border-r border-solid border-primary bg-primary w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">3</p>
              </div>
              <div className="relative bg-opacity-25 border-r border-solid border-primary bg-primary w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">4</p>
              </div>
              <div className="relative bg-opacity-25 border-r border-solid border-primary bg-primary w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">5</p>
              </div>
              <div className="relative bg-opacity-25 border-r border-solid border-primary bg-primary w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">6</p>
              </div>
              <div className="relative bg-opacity-25 border-r border-solid border-primary bg-primary w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">7</p>
              </div>
              <div className="relative bg-opacity-25 border-r border-solid border-primary bg-primary w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">8</p>
              </div>
              <div className="relative bg-opacity-25 border-r border-solid border-primary bg-primary w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">9</p>
              </div>
              <div className="relative bg-opacity-25 border-r border-solid border-primary bg-primary w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">10</p>
              </div>
            </div>
            <div className="mt-[10px]">
              <div className="border border-dashed border-greyText rounded-full flex items-center justify-center h-[66px]">
                <h2 className="text-greyText">Drag a blob file</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-[270px] h-[240px]  bg-backgroundDark rounded-[5px] border-primary p-[14px]">
              <div className=" text-center items-center justify-between  flex gap-[14px]">
                <h1 className="font-bold text-[20px] text-primary">
                  Vibra Verse
                </h1>
                <h2 className=" w-[58px] h-[24px] font-bold text-[10px] border-[2px] border-solid border-greyText rounded-lg p-[4px] text-greyText cursor-pointer hover:text-primary hover:border-primary">
                  Private
                </h2>
              </div>
              <div className="flex items-center mt-[9px] mb-[9px]">
                <img src={circle} alt="" className="mr-[6px]" />
                <h2 className="mr-[28px] font-bold text-[12px] text-greyText">
                  R&B
                </h2>
                <h2 className="text-[13px] text-greyText">
                  Updated 6 hours ago
                </h2>
              </div>
              <p className="text-[14px] text-greyText">
                This track features vibrant synths, a groovy bassline, and
                dynamic drums, creating a lively and energetic vibe
              </p>
            </div>
            <div className="w-[270px] h-[370px] flex flex-col bg-backgroundDark  justify-between">
              <Messages />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
