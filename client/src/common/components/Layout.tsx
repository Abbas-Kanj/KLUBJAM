import React from "react";
import MusicianSidebar from "./MusicianSidebar";
import PlayerBar from "./PlayerBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-full w-full z-10">
        <MusicianSidebar />
        {children}
      </div>
      <PlayerBar />
    </div>
  );
};

export default Layout;
