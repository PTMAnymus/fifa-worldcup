import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import TheFinal from "./pages/TheFinal/index";
import NotFound from "./pages/NotFound/index";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes >
            <Route exact path="/" >
              <Route exact index element={<Home />}/>
              <Route exact path="final" element={<TheFinal />}/>
              <Route exact path="*" element={<NotFound />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
