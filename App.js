import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Component/pages/Hero";
import HomeLoggedIn from "./Component/pages/HomeLoggedIn";
import About from "./Component/pages/About";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import Jobs from "./Component/pages/Jobs";
import Companies from "./Component/pages/Companies";
import SkillTests from "./Component/pages/SkillTests";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("synskillUser"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("synskillUser");
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />

      <Routes>
        {/* 🔥 SINGLE HOME ROUTE */}
        <Route
          path="/"
          element={user ? <HomeLoggedIn /> : <Home />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/skill-tests" element={<SkillTests />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
