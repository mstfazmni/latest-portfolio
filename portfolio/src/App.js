import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; //smooth scrolling
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";


function App () {
  return (
    <Router>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;