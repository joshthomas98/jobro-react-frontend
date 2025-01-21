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
import BrowserExtensionComingSoon from "./pages/BrowserExtensionComingSoon.jsx";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import Support from "./pages/Support.jsx";
import Blog from "./pages/Blog.jsx";
import FAQs from "./pages/FAQs.jsx";
import Careers from "./pages/Careers.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import NewsletterThankYou from "./pages/NewsletterThankYou.jsx";

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

          <Route path="/userprofile/:userId" element={<UserProfile />} />

          <Route
            path="/browserextensioncomingsoon"
            element={<BrowserExtensionComingSoon />}
          />

          <Route path="/terms" element={<TermsAndConditions />} />

          <Route path="/privacy" element={<PrivacyPolicy />} />

          <Route path="/disclaimer" element={<Disclaimer />} />

          <Route path="/support" element={<Support />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="/faqs" element={<FAQs />} />

          <Route path="/careers" element={<Careers />} />

          <Route path="/contact" element={<ContactUs />} />

          <Route path="/newsletterthankyou" element={<NewsletterThankYou />} />
        </Routes>
        <Footer />
      </Router>
    </LoginContext.Provider>
  );
};

export default App;
