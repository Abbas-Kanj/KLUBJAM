import { BrowserRouter, Route, Routes } from "react-router-dom";
import store, { persistor } from "./store";
import { Provider } from "react-redux";
import Musician from "../pages/Musician";
import Landing from "../pages/Landing";
import Admin from "../pages/Admin";
import Moderator from "../pages/Moderator";
import { PersistGate } from "redux-persist/integration/react";
import ProtectedAdmin from "../core/routes/ProtectedAdmin";
import ProtectedModerator from "../core/routes/ProtectedModerator";
import ProtectedUser from "../core/routes/ProtectedUser";
import { Toaster } from "react-hot-toast";
import Production from "../pages/Production/Production";
import Messages from "../newMessages/Messages";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster
          toastOptions={{
            style: {
              padding: "16px",
              color: "#ffffff",
              background: "#0FACFD",
            },
          }}
        ></Toaster>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Production />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="/Landing" element={<Landing />}></Route>
            <Route element={<ProtectedUser />}>
              <Route path="/Musician/*" element={<Musician />} />
            </Route>
            <Route element={<ProtectedAdmin />}>
              <Route path="/Admin/*" element={<Admin />} />
            </Route>
            <Route element={<ProtectedModerator />}>
              <Route path="/Moderator/*" element={<Moderator />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
