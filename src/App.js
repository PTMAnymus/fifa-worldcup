import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import TheFinal from "./pages/TheFinal/index";
import NotFound from "./pages/NotFound/index";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route exact path="" element={ <Home/> } />
              <Route exact path="/final" element={<TheFinal />}/>
              <Route exact path="*" element={<TheFinal />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
