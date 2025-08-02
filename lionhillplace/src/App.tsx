import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import MobileSidebar from "./components/layout/MobileSidebar";
import Footer from "./components/layout/Footer";
import Home from "./pages/HomePage";
import FAQContactPage from "./pages/FAQContactPage";
import ExplorePage from "./pages/ExplorePage";
import { Analytics } from '@vercel/analytics/react';
import ThemeToggle from "./components/layout/ThemeToggle";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true });

    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-700 dark:text-white">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: isDark ? "#18181b" : "#f9fafb", // zinc-900 or gray-50
            color: isDark ? "#f4f4f5" : "#111827",       // zinc-100 or gray-900
            fontSize: "14px",
            border: isDark ? "1px solid #3f3f46" : "1px solid #d1d5db", // zinc-700 or gray-300
            padding: "12px 16px",
            borderRadius: "8px",
          },
        }}
      />
      <Navbar />
      <MobileSidebar />
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contactfaq" element={<FAQContactPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
      <Footer />
      <ThemeToggle />
      <Analytics />
    </div>
  );
}

export default App;
