import downArrow from "../../../../assets/Workspace/icons/chevron-down.svg";
import note from "../../../../assets/Workspace/icons/note-02.svg";
import { useEffect, useState } from "react";
import UploadTrackPopup from "./UploadTrackPopup";
import Cookies from "universal-cookie";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { fetchAllTracks } from "../../../../../redux/tracks/tracksSlice";
import { setCurrPlaying } from "../../../../../redux/music/musicSlice";

const Tracks = () => {
  const [openUploadTrackPopup, setOpenUploadTrackPopup] = useState(false);
  const dispatch = useAppDispatch();
  const cookies = new Cookies();
  const auth_token = cookies.get("auth_token");
  const tracks = useAppSelector((state) => state.track.tracks);

  const handlePlay = (track: any) => {
    dispatch(setCurrPlaying(track));
  };

  useEffect(() => {
    if (auth_token) {
      dispatch(fetchAllTracks());
    }
  }, [auth_token, dispatch]);

  return (
    <div className="flex flex-col justify-center items-center mt-[26px]">
      {openUploadTrackPopup && (
        <UploadTrackPopup
          setOpenUploadTrackPopup={setOpenUploadTrackPopup}
        ></UploadTrackPopup>
      )}
      <div className="flex gap-[10px] w-fit h-[36px]">
        <input
          type="text"
          placeholder="Find a track..."
          className="w-[516px]  pl-[10px] pt-[10px] pb-[10px] text-[14px] text-greyText bg-background rounded border border-solid border-greyText"
        />
        <div className="flex items-center justify-center w-[74px] h-[36px] bg-background rounded cursor-pointer p-[6px] border border-solid border-primary">
          <h2 className="font-bold text-[14px] text-greyText">Genre</h2>
          <img src={downArrow} alt="" />
        </div>
        <div className="flex items-center justify-center w-[74px] h-[36px] bg-background rounded cursor-pointer p-[6px] border border-solid border-primary">
          <h2 className="font-bold text-[14px] text-greyText">Sort</h2>
          <img src={downArrow} alt="" />
        </div>
        <div className="flex items-center justify-center w-[90px] h-[36px] bg-primary rounded cursor-pointer pt-[6px] pb-[6px] pl-[15px] pr-[15px] gap-[2px] hover:opacity-70">
          <img
            src={note}
            alt=""
            onClick={() => {
              setOpenUploadTrackPopup(true);
            }}
          />
          <h2 className="font-bold text-[14px]">Upload</h2>
        </div>
      </div>
      <div className="mt-[24px] mb-[30px]  w-[1133px] flex flex-wrap gap-[22px] items-center">
        {tracks
          ?.slice()
          .reverse()
          .map((track, i) => (
            <div
              key={i}
              className="w-[209px] h-[241px] flex flex-col justify-start relative"
              onClick={() => handlePlay(track)}
            >
              <img
                src={`http://127.0.0.1:3000${track.track_image}`}
                alt=""
                className="w-[209px] h-[209px]"
              />
              <h2 className="font-medium text-[12px] mt-[6px]">
                {track.track_name}
              </h2>
              <h2 className="font-medium text-[12px] text-greyText">
                {track.user.username}
              </h2>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white bg-primary rounded-full p-3 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tracks;
