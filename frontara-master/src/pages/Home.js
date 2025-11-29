// src/pages/Home.js
import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Home | Metrinfo.com</title>
        <meta name="description" content="Expert-written blog posts about Salesforce, web dev, and mobile apps." />
      </Helmet>

      <section className="hero glass">
        <div className="hero-content">
          <h1>Building your digital dreams</h1>
          <p>Expert services in Web Development, Salesforce, and Mobile Apps.</p>
         {/* <a href="/contact" className="btn-primary">Get Started</a>  */}
         <Link className="btn-primary" to="/contact">Get Started</Link>
         {/* <a href="/contact" className="btn-primary">Get Started</a> */}
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {[
              { title: "Web Development", desc: "High-quality websites tailored to your needs." },
              { title: "Salesforce Development", desc: "Custom Salesforce solutions." },
              { title: "Mobile App Development", desc: "Intuitive mobile applications." },
              { title: "DevOps Development", desc: "Modern DevOps solutions." },
              { title: "UI/UX Design", desc: "Stunning UI/UX design." },
              { title: "AI Agent Development", desc: "LLM-powered AI integration." },
            ].map((service, idx) => (
              <div key={idx} className="service-card glass animate-on-scroll">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
