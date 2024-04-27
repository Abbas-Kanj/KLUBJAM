import React from "react";
import ModeratorSidebar from "./ModeratorSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const ModeratorLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <ModeratorSidebar />
      {children}
    </div>
  );
};

export default ModeratorLayout;
