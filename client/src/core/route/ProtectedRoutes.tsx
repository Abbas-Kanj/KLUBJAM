// import { Outlet, Navigate } from "react-router-dom";
// import { useAppSelector } from "../../app/hooks";
// import Cookies from "universal-cookie";
// import { jwtDecode } from "jwt-decode";

// interface DecodedToken {
//   role: number;
//   exp: any;
// }

// const ProtectedRoutes: React.FC = () => {
//   const cookies = new Cookies();
//   const auth_token = cookies.get("auth_token");
//   const decodedToken: DecodedToken = jwtDecode(auth_token);

//   const userRole = decodedToken.role;

//   console.log("role_id:", userRole);

//   const redirectPath =
//     userRole === 3
//       ? "/Musician"
//       : userRole === 1
//       ? "/Admin"
//       : userRole === 2
//       ? "/Moderator"
//       : "/";

//   return auth_token && userRole ? <Outlet /> : <Navigate to={redirectPath} />;
// };

// export default ProtectedRoutes;
