import React from "react";
import { motion } from "framer-motion";
import "../styles/Works.css";

import work1 from '../assets/1.jpg';
import work2 from '../assets/2.jpg';
import work3 from '../assets/3.jpg';

const works = [
  {name: "Task Management", img: work1},
  {name: "Introduction", img: work2},
  {name: "To-Do-List", img: work3}
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
                <div className="card" style={{ backgroundImage : `url(${work.img})`}}></div>
            </div>
          ))}
      </div>
    </motion.div>
  );
}

export default Works;
