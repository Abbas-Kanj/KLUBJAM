import { Route, Routes } from "react-router-dom";

import Account from "./pages/Account";
import Home from "./pages/Home";
import Workspace from "./pages/Workspace";
import Explore from "./pages/Explore";
import Playlists from "./pages/Playlists";
import Jambox from "./pages/JamBox";
import Profile from "./pages/Profile";
import Layout from "../components/MusicianLayout";

const Musician = () => {
  return (
    <Routes>
      <Route path="Home" element={<Layout children={<Home />} />} />
      <Route path="Workspace" element={<Layout children={<Workspace />} />} />
      <Route path="Explore" element={<Layout children={<Explore />} />} />
      <Route path="Playlists" element={<Layout children={<Playlists />} />} />
      <Route path="JamBox" element={<Layout children={<Jambox />} />} />
      <Route path="Profile" element={<Layout children={<Profile />} />} />
      <Route path="Account" element={<Layout children={<Account />} />} />
    </Routes>
  );
};

export default Musician;
