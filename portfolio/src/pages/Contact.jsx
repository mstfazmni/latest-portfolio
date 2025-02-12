import React from "react";
import { motion } from "framer-motion";
import '../styles/Contact.css';
import gitLogo from '../assets/github.png';
import linkedLogo from '../assets/linkedin.png';

const Contact = () => {
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

                <div className="input-container">
                    <input type="text" placeholder="Your name"/>
                    <input type="email" placeholder="Your email address"/>
                </div>
                
                <div className="action-container">
                    <textarea placeholder="Write to me..."></textarea>
                    <button className="submit-btn">Submit</button>
                </div>
                
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
}

export default Contact;
