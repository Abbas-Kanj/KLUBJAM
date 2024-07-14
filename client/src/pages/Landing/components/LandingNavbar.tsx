import React from "react";
import logo from "/logo.svg";

interface LandingNavbarProps {
  setOpenSigninPopup: (open: boolean) => void;
  setOpenSignupPopup: (open: boolean) => void;
}

const LandingNavbar: React.FC<LandingNavbarProps> = ({
  setOpenSigninPopup,
  setOpenSignupPopup,
}) => {
  return (
    <nav className="flex mt-[33px] ml-auto mr-auto rounded-2xl items-center justify-around h-20 w-[1400px] bg-backgroundPurple bg-opacity-65">
      <div className="flex">
        <img src={logo} alt="" />
        <h2 className="ml-[32px] text-2xl font-semibold">KLUBJAM</h2>
      </div>
      <div className="flex justify-evenly w-[510px] text-lg gap-6 font-medium scroll-smooth">
        <a href="#workspace" className="hover:underline">
          Workspace
        </a>
        <a href="#community" className="hover:underline">
          Community
        </a>
        <a href="#music" className="hover:underline">
          {" "}
          Playlists
        </a>
        <a href="#AI" className="hover:underline">
          {" "}
          Jambox
        </a>
      </div>
      <div className="flex text-sm text-center justify-center items-center">
        <button
          className=" bg-primary w-[94px] h-[38px] overflow-hidden rounded-[10px] font-medium"
          onClick={() => {
            setOpenSigninPopup(true);
          }}
        >
          SIGN IN
        </button>
        <button
          className="w-[154px] h-[38px] ml-[18px] overflow-hidden rounded-[10px] text-primary font-medium border-solid border-2"
          onClick={() => {
            setOpenSignupPopup(true);
          }}
        >
          SIGN UP - it's free!
        </button>
      </div>
    </nav>
  );
};

export default LandingNavbar;
