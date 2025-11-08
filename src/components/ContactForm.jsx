import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all required fields.");
      return;
    }
    if (!validateEmail(form.email)) {
      setStatus("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("https://vernanbackend.ezlab.in/api/contact-us/", form);
      if (res.status === 200 || res.status === 201) {
        setStatus("Form Submitted");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Submission failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-container">
      <div className="left-block">
        <h3>Whether you have an idea, a question, or simply want to explore how V can work with you, we’re just a message away.</h3>
        <h3>Let’s catch up over coffee. Great stories always begin with a good conversation.</h3>
      </div>

      <div className="right-block">
        <h1 className="title">Join the Story</h1>
        <p className="subtitle">Ready to bring your vision to life? Let’s talk.</p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input name="name" value={form.name} onChange={change} placeholder="Your name*" />
          <input name="email" type="email" value={form.email} onChange={change} placeholder="Your email*" />
          <input name="phone" value={form.phone} onChange={change} placeholder="Phone" />
          <textarea name="message" value={form.message} onChange={change} placeholder="Your message*" rows="5" />
          <button type="submit" disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
        </form>

        <div className="status">{status}</div>
      </div>
    </section>
  );
};

export default ContactForm;
