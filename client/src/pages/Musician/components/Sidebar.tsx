import React from "react";
import Logo from "../../../assets/icons/logo.svg";

import { NavLink, useNavigate } from "react-router-dom";
interface LayoutProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();

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
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
