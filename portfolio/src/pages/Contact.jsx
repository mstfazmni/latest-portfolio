import React, { useState } from "react";
import { motion } from "framer-motion";
import '../styles/Contact.css';
import gitLogo from '../assets/github.png';
import linkedLogo from '../assets/linkedin.png';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Manually submit the form using FormSubmit
    const form = e.target;

    fetch("https://formsubmit.co/ajax/zmnimstfa@gmail.com", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      })
    })
    .then(response => response.json())
    .then(data => {
      setSubmitted(true);
      form.reset();
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-container">
        <div className="contact-wrapper">
          <section className="contact-left-sec">
              <h1 className="h1-contact">GET IN</h1>
              <span className="span-contact">touch</span>
              <div className="left-sec-inside-container">

                <form onSubmit={handleSubmit}>
                  <div className="input-container">
                    <input type="text" name="name" placeholder="Your name" required />
                    <input type="email" name="email" placeholder="Your email address" required />
                  </div>

                  <div className="action-container">
                    <textarea name="message" placeholder="Write to me..." required></textarea>
                    <button type="submit" className="submit-btn">Submit</button>
                  </div>
                </form>

                {submitted && (
                  <p className="success-msg">Thank you! Your message has been sent.</p>
                )}

              </div>
          </section>

          <section className="contact-right-sec">
              <div className="logos-email-container">
                  <div className="logos-div">
                      <a href="https://github.com/mstfazmni" target="_blank" rel="noopener noreferrer">
                        <img src={gitLogo} alt="GitHub" className="git-logo" />
                      </a>
                      <a href="https://www.linkedin.com/in/mo-zamani" target="_blank" rel="noopener noreferrer">
                        <img src={linkedLogo} alt="LinkedIn" className="linked-logo" />
                      </a>
                  </div>
                  <div className="email-div">
                    <p>You can also email me</p>
                    <a href="mailto:zmnimstfa@gmail.com">zmnimstfa@gmail.com</a>
                  </div>
              </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
