import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import MobileTopNav from "./components/layout/MobileTopNav";
import Footer from "./components/layout/Footer";
import Home from "./pages/HomePage";
import FAQContactPage from "./pages/FAQContactPage";
import ExplorePage from "./pages/ExplorePage";
import { Analytics } from '@vercel/analytics/react';
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <MobileTopNav />
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactfaq" element={<FAQContactPage />} />
          <Route path="/explore" element={<ExplorePage />}/>
        </Routes>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
