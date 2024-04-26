import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Layout from "../common/components/Layout";
import Workspace from "../pages/Workspace";
import Explore from "../pages/Explore";
import Playlists from "../pages/Playlists";
import Jambox from "../pages/JamBox";
import Profile from "../pages/Profile";
import Account from "../pages/Account";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/Home" element={<Layout children={<Home />} />}></Route>
          <Route
            path="/Workspace"
            element={<Layout children={<Workspace />} />}
          ></Route>
          <Route
            path="/Explore"
            element={<Layout children={<Explore />} />}
          ></Route>
          <Route
            path="/Playlists"
            element={<Layout children={<Playlists />} />}
          ></Route>
          <Route
            path="/JamBox"
            element={<Layout children={<Jambox />} />}
          ></Route>
          <Route
            path="/Profile"
            element={<Layout children={<Profile />} />}
          ></Route>
          <Route
            path="/Account"
            element={<Layout children={<Account />} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
