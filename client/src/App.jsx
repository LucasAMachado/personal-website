import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import Resume from "./Resume";
import McMaster from "./McMaster";
import Navbar from "./layout/Navbar";
import Profile from "./Profile";

function CurrentPath() {
  const location = useLocation();
  return <p>Current path: {location.pathname}</p>;
}

function App() {
  return (
    <Router>

        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1 p-5 w-full max-w-6xl mx-auto md:text-left sm:text-center">
            <Profile />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/mcmaster" element={<McMaster />} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
