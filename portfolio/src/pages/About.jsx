import React from "react";
import { motion } from "framer-motion";
import myVideo from '../assets/about-video.mp4';
import '../styles/About.css';
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}  
      animate={{ opacity: 1 }}  
      exit={{ opacity: 0 }}     
      transition={{ duration: 0.5 }}  
    >
    <div className="about-container">
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={myVideo} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
      <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {"My Story".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        <p>
            Hey there! I’m Mostafa, a software developer who turns code into captivating user experiences
            (with just a dash of magic).
            Whether it’s crafting pixel-perfect designs or building seamless back-end solutions,
            I bring a passion for clean, responsive, and engaging websites.
            I’m here to tackle challenges, make the web a better place,
            and maybe even save a few projects from the dreaded "Page Not Found."
            Dive in to check out my work—let’s build something awesome together!</p>
      </div>
    </div>
    </motion.div>
  );
}

export default About;