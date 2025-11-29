// src/components/Layout.js
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/css/styles.css";


const Layout = ({ children }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const onScroll = () => {
      const triggerBottom = window.innerHeight * 0.8;

      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerBottom) {
          el.classList.add("show");
        } else {
          el.classList.remove("show");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Run initially

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
