import { BrowserRouter, Route, Routes } from "react-router-dom";
import store, { persistor } from "./store";
import { Provider } from "react-redux";
import Musician from "../pages/Musician";
import Admin from "../pages/Admin";
import Moderator from "../pages/Moderator";
import { PersistGate } from "redux-persist/integration/react";
import ProtectedAdmin from "../core/routes/ProtectedAdmin";
import ProtectedModerator from "../core/routes/ProtectedModerator";
import ProtectedUser from "../core/routes/ProtectedUser";
import { Toaster } from "react-hot-toast";
import Production from "../pages/Production/Production";
import LandingPage from "../pages/Landing";
import NotFoundPage from "../pages/NotFoundPage";

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
            <Route path="/Production" element={<Production />}></Route>
            <Route path="/*" element={<NotFoundPage />}></Route>
            <Route path="/" element={<LandingPage />}></Route>
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
