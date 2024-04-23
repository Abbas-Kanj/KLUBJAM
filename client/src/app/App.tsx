import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import Landing from "../pages/Landing";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
