import React, { useState } from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      contact: Yup.string().matches(/^[0-9]+$/, "Must be only digits"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const token = await getToken();
        if (!token) {
          throw new Error("token not found ");
        }
        const response = await axios.post(
          "https://api.metrinfo.com/contacts",
          {
            name: values.name,
            email: values.email,
            message: values.message,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Form submitted successfully:", response.data);
        resetForm();
        // toast.success("Message sent successfully! We'll get back to you soon.");
        alert("Message sent successfully! We'll get back to you soon.");
      } catch (error) {
        console.error("Error submitting form:", error);
        // toast.error("Failed to send message. Please try again later.");
        alert("Failed to send message. Please try again later.");
      } finally {
        setLoading(false);
      }
    },
  });
  // localStorage.setItem("publicToken", data.token);

  const getToken = async () => {
    try {
      const res = await axios.get("https://api.metrinfo.com/public/token");
      const token = res?.data?.token;
      //console.log(token, "token");
      if (token) {
        //localStorage.setItem("publicToken", token);
      }
      return token;
    } catch (error) {
      console.log("error fetching token", error);
      return null;
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Metrinfo.com</title>
      </Helmet>

      <section className="page-header glass">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Fill out the form below.</p>
      </section>

      <section className="contact-form-section container">
        <form
          className="contact-form glass animate-on-scroll"
          onSubmit={formik.handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="error">{formik.errors.name}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input
              id="contact"
              name="contact"
              type="tel"
              placeholder="Enter your phone number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.contact}
            />
            {formik.touched.contact && formik.errors.contact && (
              <div className="error">{formik.errors.contact}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message && (
              <div className="error">{formik.errors.message}</div>
            )}
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
