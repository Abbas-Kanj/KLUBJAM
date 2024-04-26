import React, { useState } from "react";
import Logo from "../../assets/Sidebar/icons/logo.svg";
import logout from "../../assets/Sidebar/icons/logout.svg";
import homeLogo from "../../assets/Sidebar/icons/grey/home-04.svg";
import homeLogoCyan from "../../assets/Sidebar/icons/cyan/home-04.svg";
import workspace from "../../assets/Sidebar/icons/grey/Vector.svg";
import workspaceCyan from "../../assets/Sidebar/icons/cyan/Vector.svg";
import explore from "../../assets/Sidebar/icons/grey/Group.svg";
import exploreCyan from "../../assets/Sidebar/icons/cyan/Group.svg";
import jambox from "../../assets/Sidebar/icons/grey/Group-2.svg";
import jamboxCyan from "../../assets/Sidebar/icons/cyan/Group-2.svg";
import playlist from "../../assets/Sidebar/icons/grey/mdi_playlist-music.svg";
import playlistCyan from "../../assets/Sidebar/icons/cyan/mdi_playlist-music.svg";
import profile from "../../assets/Sidebar/icons/grey/Group-1.svg";
import profileCyan from "../../assets/Sidebar/icons/cyan/Group-1.svg";
import account from "../../assets/Sidebar/icons/grey/Group-3.svg";
import accountCyan from "../../assets/Sidebar/icons/cyan/Group-3.svg";
import { useNavigate } from "react-router-dom";

const MusicianSidebar = () => {
  const navigate = useNavigate();
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isWorkspaceHovered, setIsWorkspaceHovered] = useState(false);
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const [isJamboxHovered, setIsJamboxHovered] = useState(false);
  const [isPlaylistHovered, setIsPlaylistHovered] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isAccountHovered, setIsAccountHovered] = useState(false);

  return (
    <div className="flex flex-col w-[220px] h-[671px] bg-background">
      <div className="flex mt-[38px] ml-[14px] gap-[19px]">
        <img src={Logo} alt="" />
        <h1 className="font-semibold text-[22px]">KLUBJAM</h1>
      </div>
      <div>
        <div className="ml-[24px] mt-[72px] mb-[60px] flex flex-col gap-[20px] h-[400px]">
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setIsHomeHovered(true)}
              onMouseLeave={() => setIsHomeHovered(false)}
              onClick={() => navigate("../Home")}
            >
              <img
                src={isHomeHovered ? homeLogoCyan : homeLogo}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Home
              </h2>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setIsWorkspaceHovered(true)}
              onMouseLeave={() => setIsWorkspaceHovered(false)}
              onClick={() => navigate("../Workspace")}
            >
              <img
                src={isWorkspaceHovered ? workspaceCyan : workspace}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Workspace
              </h2>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setIsExploreHovered(true)}
              onMouseLeave={() => setIsExploreHovered(false)}
              onClick={() => navigate("../Explore")}
            >
              <img
                src={isExploreHovered ? exploreCyan : explore}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Explore
              </h2>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setIsJamboxHovered(true)}
              onMouseLeave={() => setIsJamboxHovered(false)}
              onClick={() => navigate("../JamBox")}
            >
              <img
                src={isJamboxHovered ? jamboxCyan : jambox}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                JamBox
              </h2>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setIsPlaylistHovered(true)}
              onMouseLeave={() => setIsPlaylistHovered(false)}
              onClick={() => navigate("../Playlists")}
            >
              <img
                src={isPlaylistHovered ? playlistCyan : playlist}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Playlists
              </h2>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setIsProfileHovered(true)}
              onMouseLeave={() => setIsProfileHovered(false)}
              onClick={() => navigate("../Account")}
            >
              <img
                src={isProfileHovered ? profileCyan : profile}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Profile
              </h2>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setIsAccountHovered(true)}
              onMouseLeave={() => setIsAccountHovered(false)}
            >
              <img
                src={isAccountHovered ? accountCyan : account}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Account
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-[16px] ml-[24px] items-center cursor-pointer">
          <img src={logout} alt="" />
          <h2 className="font-semibold text-[16px] text-[#FF0000]">Logout</h2>
        </div>
      </div>
    </div>
  );
};

export default MusicianSidebar;
