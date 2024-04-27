import React from "react";
import AdminSidebar from "./AdminSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <AdminSidebar />
      {children}
    </div>
  );
};

export default AdminLayout;
