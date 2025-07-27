import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/HomePage";
import FAQContactPage from "./pages/FAQContactPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<FAQContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
