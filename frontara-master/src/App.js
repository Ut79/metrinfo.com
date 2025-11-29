// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-post/:id" element={<BlogPost />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </Router>
);

export default App;
