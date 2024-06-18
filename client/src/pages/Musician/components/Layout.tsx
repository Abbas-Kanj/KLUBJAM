import React from "react";
import PlayerBar from "./PlayerBar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-black p-2 gap-1">
      <Sidebar children={children} />
      <PlayerBar />
    </div>
  );
};

export default Layout;
