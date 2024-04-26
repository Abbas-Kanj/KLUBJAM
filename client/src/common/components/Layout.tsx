import React from "react";
import MusicianSidebar from "./MusicianSidebar";
import PlayerBar from "./PlayerBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-y-hidden">
      <div className="flex h-full w-full overflow-y-hidden">
        <MusicianSidebar />
        {children}
      </div>
      <PlayerBar />
    </div>
  );
};

export default Layout;
