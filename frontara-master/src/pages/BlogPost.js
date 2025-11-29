// src/pages/BlogPost.js
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import blogPosts from "../data/blogData";
import { Helmet } from "react-helmet";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  return (
    <Layout>
      <Helmet>
        <title>{post ? `${post.title} | Metrinfo.com` : "Post Not Found | Metrinfo.com"}</title>
      </Helmet>

      <section className="page-header glass">
        <h1>{post ? post.title : "Post Not Found"}</h1>
        <p>{post ? post.meta : ""}</p>
      </section>

      <section
        className="blog-post-content container glass animate-on-scroll"
        dangerouslySetInnerHTML={{
          __html: post ? post.content : "<p>Sorry, the blog post you're looking for doesn't exist.</p>"
        }}
      ></section>
    </Layout>
  );
};

export default BlogPost;
