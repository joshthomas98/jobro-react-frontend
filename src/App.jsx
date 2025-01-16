import React, { createContext, useState, useEffect } from "react"; // Don't forget to import useEffect!
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import WelcomeNewUser from "./pages/WelcomeNewUser";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import UserProfile from "./pages/UserProfile";

export const LoginContext = createContext();

const App = () => {
  const [userId, setUserId] = useState(null);
  const loginContextValue = {
    userId,
    setUserId,
  };

  useEffect(() => {
    const userIdFromLocalStorage = localStorage.getItem("userId");

    if (userIdFromLocalStorage) {
      setUserId(userIdFromLocalStorage); // Set userId in context from localStorage
    }
  }, [setUserId]);

  return (
    <LoginContext.Provider value={loginContextValue}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/about" element={<About />} />

          <Route path="/register" element={<Register />} />

          <Route path="/signin" element={<SignIn />} />

          <Route path="/welcomenewuser" element={<WelcomeNewUser />} />

          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </Router>
    </LoginContext.Provider>
  );
};

export default App;
