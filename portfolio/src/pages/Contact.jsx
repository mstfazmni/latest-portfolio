import React from "react";
import { motion } from "framer-motion";
import '../styles/Contact.css';

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
          </section>
        </div>
        
      </div>
    </motion.div>
  );
}

export default Contact;
