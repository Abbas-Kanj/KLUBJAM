import { Route, Routes } from "react-router-dom";
import Analytics from "./pages/Analytics";
import CoinRequests from "./pages/Coin_requests";
import Moderator from "../Moderator";
import Musicians from "./pages/Musicians";
import Posts from "./pages/Posts";
import Reports from "./pages/Reports";
import Tracks from "./pages/Tracks";
import AdminLayout from "./components/AdminLayout";
import Moderators from "./pages/Moderators";

const Admin = () => {
  return (
    <Routes>
      <Route
        path="Analytics"
        element={<AdminLayout children={<Analytics />} />}
      />
      <Route
        path="CoinRequests"
        element={<AdminLayout children={<CoinRequests />} />}
      />
      <Route
        path="Moderators"
        element={<AdminLayout children={<Moderators />} />}
      />
      <Route
        path="Musicians"
        element={<AdminLayout children={<Musicians />} />}
      />
      <Route path="Posts" element={<AdminLayout children={<Posts />} />} />
      <Route path="Reports" element={<AdminLayout children={<Reports />} />} />
      <Route path="Tracks" element={<AdminLayout children={<Tracks />} />} />
    </Routes>
  );
};

export default Admin;
