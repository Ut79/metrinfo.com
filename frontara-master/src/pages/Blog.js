// src/pages/Blog.js
import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const posts = [
  { id: 1, title: "Latest Web Development Trends", desc: "Discover the newest technologies shaping the web." },
  { id: 2, title: "Salesforce Best Practices", desc: "Maximize Salesforce efficiency." },
  { id: 3, title: "Mobile App Innovations", desc: "Explore smart features for apps." },
  { id: 4, title: "Boosting Productivity with Agentforce", desc: "Empower teams with smart automation." },
  { id: 5, title: "Increase sales with Agent", desc: "Add live agent widget to boost conversions." },
  { id: 6, title: "AI for Image Transformation", desc: "Real-time AI image enhancements." }
];

const Blog = () => (
  <Layout>
    <Helmet>
      <title>Blog | Metrinfo.com</title>
    </Helmet>

    <section className="page-header glass">
      <h1>Our Blog</h1>
      <p>Insights, updates, and tech trends curated by our experts.</p>
    </section>

    <section className="blog-posts container">
      <div className="posts-grid">
        {posts.map(post => (
          <div key={post.id} className="post-card glass animate-on-scroll">
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <a href={`/blog-post/${post.id}`} className="btn-primary">Read More</a>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;
