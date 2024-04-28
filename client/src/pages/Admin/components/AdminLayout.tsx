import React from "react";
import AdminSidebar from "./AdminSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen  ">
      <AdminSidebar />
      <div className="h-full w-full overflow-x-hidden overflow-scroll bg-backgroundDark">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
