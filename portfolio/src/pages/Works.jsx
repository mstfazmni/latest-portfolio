import React from "react";
import { motion } from "framer-motion";
import "../styles/Works.css";
import projects from "../data/projects";
import { Link } from "react-router-dom";

function Works() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="works-container">
          {projects.map((project, index) => (
              <div className="card-wrapper" key={index}>
                <span className="work-name">{project.name}</span>
                <div className="image-wrapper">
                    <Link to={`/project/${project.id}`}>
                      <motion.img 
                        src={project.img} 
                        alt={project.name} 
                        className="card"
                        initial={{ scale: 0.8, opacity: 0 }}  
                        animate={{ scale: 1, opacity: 1 }}  
                        whileHover={{ scale: 1.1, rotate: 3 }}  
                        transition={{ duration: 0.3 }}  
                      />
                    </Link>
                </div>
            </div>
          ))}
      </div>
    </motion.div>
    
  );
}

export default Works;
