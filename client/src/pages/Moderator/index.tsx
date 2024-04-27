import { Route, Routes } from "react-router-dom";

import Tracks from "./pages/Tracks";
import ModeratorLayout from "./components/ModeratorLayout";
import Comments from "./pages/Comments";
import Messages from "./pages/Messages";
import Reports from "./pages/Report";

const Moderator = () => {
  return (
    <Routes>
      <Route
        path="Tracks"
        element={<ModeratorLayout children={<Tracks />} />}
      />
      <Route
        path="Comments"
        element={<ModeratorLayout children={<Comments />} />}
      />
      <Route
        path="Messages"
        element={<ModeratorLayout children={<Messages />} />}
      />
      <Route
        path="Report"
        element={<ModeratorLayout children={<Reports />} />}
      />
    </Routes>
  );
};

export default Moderator;
