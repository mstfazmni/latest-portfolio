import React from "react";
import { motion } from "framer-motion";
import "../styles/Works.css";

import work1 from '../assets/1.jpg';
import work2 from '../assets/2.jpg';
import work3 from '../assets/3.jpg';
import work4 from '../assets/4.jpg';

const works = [
  {name: "Task Management", img: work1, link: "https://mz-task-management.netlify.app/"},
  {name: "Introduction", img: work2, link: "https://mz-portfolio-mz.netlify.app/"},
  {name: "To-Do-List", img: work3, link: "#"},
  {name: "Puzzle", img: work4, link: "#"}
]

function Works() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="works-container">
          {works.map((work, index) => (
              <div className="card-wrapper" key={index}>
                <span className="work-name">{work.name}</span>
                <div className="image-wrapper">
                    <a href={work.link} target="_blank" rel="noopener noreferrer">
                      <motion.img 
                        src={work.img} 
                        alt={work.name} 
                        className="card"
                        initial={{ scale: 0.8, opacity: 0 }}  
                        animate={{ scale: 1, opacity: 1 }}  
                        whileHover={{ scale: 1.1, rotate: 3 }}  
                        transition={{ duration: 0.3 }}  
                      />
                    </a>
                </div>
            </div>
          ))}
      </div>
    </motion.div>
    
  );
}

export default Works;
