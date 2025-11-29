// src/pages/Projects.js
import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const Projects = () => (
  <Layout>
    <Helmet>
      <title>Our Projects | Metrinfo.com</title>
    </Helmet>

    <section className="page-header glass">
      <h1>Our Projects</h1>
      <p>Explore the work we've done for our amazing clients.</p>
    </section>

    <section className="projects container">
      <div className="projects-grid">
        <div className="project-card glass animate-on-scroll">
          <h3>Corporate Website</h3>
          <p>Modern and responsive corporate websites built with the latest technologies.</p>
        </div>
        <div className="project-card glass animate-on-scroll">
          <h3>Salesforce Customization</h3>
          <p>Tailored Salesforce solutions for efficient business operations.</p>
        </div>
        <div className="project-card glass animate-on-scroll">
          <h3>Mobile Application</h3>
          <p>Robust and user-friendly mobile apps for Android and iOS platforms.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Projects;
