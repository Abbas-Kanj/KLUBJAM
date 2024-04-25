import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Layout from "../common/components/Layout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/Home" element={<Layout children={<Home />} />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
