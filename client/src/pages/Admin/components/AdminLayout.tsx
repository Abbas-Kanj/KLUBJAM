import React from "react";
import AdminSidebar from "./AdminSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-y-hidden">
      <div className="flex h-full w-full overflow-y-hidden">
        <AdminSidebar />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
