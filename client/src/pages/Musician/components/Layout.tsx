import React from "react";
import PlayerBar from "./AudioPlayer";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-screen h-screen bg-black p-2 gap-4">
      <Sidebar children={children} />
      <PlayerBar />
    </div>
  );
};

export default Layout;
