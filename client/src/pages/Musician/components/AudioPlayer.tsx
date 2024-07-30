import { MdPlayArrow } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { MdShuffle } from "react-icons/md";
import { MdRepeat } from "react-icons/md";
import imageCover from "../../assets/Playlists/images/Rectangle 77-4.png";

const AudioPlayer = () => {
  return (
    <div className=" w-full max-h-24 rounded-xl flex justify-between items-center px-2">
      <div className="flex gap-4">
        <img src={imageCover} alt="" className="size-10" />
        <div>
          <p className="text-sm font-semibold">Need to know</p>
          <p className="text-xs">Doja Cat</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col w-96 gap-1">
          <div className="flex justify-center items-center gap-5">
            <MdShuffle className="size-5" />
            <MdSkipPrevious className="size-6" />
            <MdPlayArrow className="size-7 bg-white fill-black rounded-full" />
            <MdSkipNext className="size-6" />
            <MdRepeat className="size-5" />
          </div>
          <div>
            <input
              type="range"
              className="w-full appearance-none bg-white bg-opacity-50 rounded-full h-2 cursor-pointer"
            />
          </div>
        </div>
        <div>
          <div
            role="progressbar"
            aria-valuenow={1456}
            aria-valuemin={0}
            aria-valuemax={4550}
          ></div>
        </div>
      </div>

      <div>
        <input type="range" />
      </div>
    </div>
  );
};

export default AudioPlayer;
