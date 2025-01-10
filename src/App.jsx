import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/about" element={<About />} />

        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
