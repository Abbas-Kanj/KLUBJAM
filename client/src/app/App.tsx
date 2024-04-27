import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import Musician from "../pages/Musician";
import Landing from "../pages/Landing";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/Musician/*" element={<Musician />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
