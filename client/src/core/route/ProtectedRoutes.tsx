import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

const ProtectedRoutes: React.FC = () => {
  const token = localStorage.getItem("token");
  const user = useAppSelector((state) => state.user.user);
  console.log("role_id:", user?.role_id);

  const redirectPath =
    user?.role_id === 3
      ? "/Musician"
      : user?.role_id === 1
      ? "/Admin"
      : user?.role_id === 2
      ? "/Moderator"
      : "/";

  return token && user ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default ProtectedRoutes;
