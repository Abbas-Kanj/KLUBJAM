import { Route, Routes } from "react-router-dom";
import Analytics from "./pages/Analytics";
import CoinRequests from "./pages/Coin_requests";
import Moderator from "../Moderator";
import Musicians from "./pages/Musicians";
import Posts from "./pages/Posts";
import Reports from "./pages/Reports";
import Tracks from "./pages/Tracks";
import AdminLayout from "./components/AdminLayout";

const Admin = () => {
  return (
    <Routes>
      <Route path="Home" element={<AdminLayout children={<Analytics />} />} />
      <Route
        path="Workspace"
        element={<AdminLayout children={<CoinRequests />} />}
      />
      <Route
        path="Explore"
        element={<AdminLayout children={<Moderator />} />}
      />
      <Route
        path="Playlists"
        element={<AdminLayout children={<Musicians />} />}
      />
      <Route path="JamBox" element={<AdminLayout children={<Posts />} />} />
      <Route path="Profile" element={<AdminLayout children={<Reports />} />} />
      <Route path="Account" element={<AdminLayout children={<Tracks />} />} />
    </Routes>
  );
};

export default Admin;
