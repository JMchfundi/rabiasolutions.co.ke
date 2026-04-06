import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

import { showUnderDevelopment } from "./utils/utils";

// Helper component to watch route changes
function RouteWatcher() {
  const location = useLocation();

  useEffect(() => {
    const underDevPages = ["/about", "/services","/team", "/contact"];
    if (underDevPages.includes(location.pathname)) {
      showUnderDevelopment();
    }
  }, [location]);

  return null; // This component doesn't render anything
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RouteWatcher /> {/* Watches route changes */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;