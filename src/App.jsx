// Main application component with routing
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Alumni from "./pages/Alumni";
import Home from "./components/Home";
import Layout from "./components/Layout";
import LegalPage from "./pages/Legal";
import Student from "./pages/Student";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="students" element={<Student />} />
          <Route path="legal" element={<LegalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;