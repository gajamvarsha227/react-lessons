import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import App1 from "./components/App1";
import App2 from "./components/App2";

// Use HashRouter for smooth routing on Vercel
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/app2" element={<App2 />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;