import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Ia from "../components/Page_IA.jsx";
import Page_Info from "../components/Page_Info.jsx";

function MainPage() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Page_Info />} />
            <Route path="/ia" element={<Ia />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default MainPage;