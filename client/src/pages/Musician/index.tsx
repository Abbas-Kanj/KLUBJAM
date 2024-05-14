import { Route, Routes } from "react-router-dom";

import Account from "./pages/Account";
import Home from "./pages/Home";
import Workspace from "./pages/Workspace";
import Explore from "./pages/Explore";
import Playlists from "./pages/Playlists";
import Jambox from "./pages/JamBox";
import Profile from "./pages/Profile";
import Layout from "./components/MusicianLayout";
import { useEffect } from "react";
import { generateToken, messaging } from "../../notifications/firebase";
import { onMessage } from "firebase/messaging";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../app/hooks";

const Musician = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    generateToken(dispatch);
    onMessage(messaging, (payload) => {
      toast(payload.notification?.body!);
    });
  }, []);
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
