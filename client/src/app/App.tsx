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

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
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
