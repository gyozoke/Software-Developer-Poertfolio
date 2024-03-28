// import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Contactme from "./components/Contactme";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Landingpage" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/LandingPage" replace />} />
        <Route
          path="/HomePage"
          element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/Aboutme"
          element={
            <>
              <Navbar />
              <Aboutme />
              <Footer />
            </>
          }
        />
        <Route
          path="/Projects"
          element={
            <>
              <Navbar />
              <Projects />
              <Footer />
            </>
          }
        />
        <Route
          path="/Contactme"
          element={
            <>
              <Navbar />
              <Contactme />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
