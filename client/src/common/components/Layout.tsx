import React from "react";
import MusicianSidebar from "./MusicianSidebar";
import PlayerBar from "./PlayerBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col relative">
      <div className="flex h-full w-full">
        <MusicianSidebar />
        {children}
      </div>
      <PlayerBar />
    </div>
  );
};

export default Layout;
