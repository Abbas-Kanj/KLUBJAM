import React from "react";
import MusicianSidebar from "./MusicianSidebar";
import PlayerBar from "./PlayerBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <>
        <MusicianSidebar />
        {children}
      </>
      <PlayerBar />
    </>
  );
};

export default Layout;
