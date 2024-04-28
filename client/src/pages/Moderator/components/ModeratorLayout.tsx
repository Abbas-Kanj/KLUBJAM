import React from "react";
import ModeratorSidebar from "./ModeratorSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const ModeratorLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <ModeratorSidebar />
      <div className="h-full w-full  overflow-x-hidden overflow-scroll bg-backgroundDark">
        {children}
      </div>
    </div>
  );
};

export default ModeratorLayout;
