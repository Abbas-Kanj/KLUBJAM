import React from "react";
import Logo from "../../../assets/icons/logo.svg";
import { MdOutlineHome } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineSmartToy } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import Cookies from "universal-cookie";

import { NavLink, useNavigate } from "react-router-dom";
interface LayoutProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", icon: MdOutlineHome, href: "../Home" },
    { name: "Workspace", icon: MdOutlineDashboard, href: "../Workspace" },
    { name: "Explore", icon: MdOutlineExplore, href: "../Explore" },
    { name: "Jambox", icon: MdOutlineSmartToy, href: "../Jambox" },
    { name: "Playlists", icon: MdOutlinePlaylistPlay, href: "../Playlists" },
    { name: "Profile", icon: MdOutlineAccountCircle, href: "../Profile" },
    { name: "Settings", icon: MdOutlineSettings, href: "../Account" },
  ];

  const handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove("auth_token");
    navigate("/");
  };

  return (
    <div className="drawer lg:drawer-open gap-1">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side p-1 background bg-cover bg-center h-full">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu flex flex-col justify-between p-4 w-52 min-h-[660px] rounded-xl bg-gradient-to-br from-pink-950 via-background to-background ">
          <div>
            <div className="flex items-center mb-16 mt-9 gap-[19px]">
              <img src={Logo} alt="" />
              <h1 className="font-semibold text-[22px]">KLUBJAM</h1>
            </div>
            <div className="flex flex-col gap-2">
              {navigation.map((nav, i) => (
                <NavLink
                  key={i}
                  to={nav.href}
                  className={({ isActive }) => {
                    return (
                      "flex gap-3 items-center font-semibold p-1 " +
                      (!isActive
                        ? "text-greyText hover:bg-primary hover:bg-opacity-40 hover:rounded-lg -ml-4 pl-4"
                        : "text-primary hover:bg-primary hover:bg-opacity-40 hover:rounded-lg border-l-4 border-primary border-solid rounded-l-sm -ml-4 pl-4")
                    );
                  }}
                >
                  {({ isActive }: { isActive: boolean }) => (
                    <>
                      <nav.icon
                        className={
                          "size-7 " +
                          (!isActive ? "fill-greyText" : "fill-primary")
                        }
                      />
                      {nav.name}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
          <div>
            <a className="flex gap-4" onClick={handleLogout}>
              <MdOutlineLogout className="size-6 fill-[#FF0000]" />
              <p className="font-bold text-[16px] text-[#FF0000]">Logout</p>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
