import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectPage.css";
import projects from "../data/projects";
import {motion} from "framer-motion";

const ProjectPage = () => {
    const {id} = useParams();
    const project = projects.find((p)=> p.id === id);

    if(!project) return <h2>Project Not Found</h2>;

    return(
        <div className="project-container">
            <section className="left-section">
                <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                >
                {project.name}
                </motion.h1>

                <hr className="devider"></hr>

                <p>{project.description}</p>

                <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                    transition: {
                        staggerChildren: 0.1
                    }
                    }
                }}
                >
                {project.tech.map((t) => (
                    <motion.li
                    key={t}
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    >
                    {t}
                    </motion.li>
                ))}
                </motion.ul>

                <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                    >
                    🔗 Live Site
                </motion.a>

            </section>
            {/* Right Section */}
            <section className="right-section">

                <motion.img
                src={project.img}
                alt={project.name}
                className="project-img"
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1, rotate: 1 }}
                />
                
                <motion.div 
                    className="back-arrow" 
                    initial={{ opacity: 0, x: 0 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.01 }}
                    >
                    <a href="/works" className="arrow-link">← Back to Works</a>
                </motion.div>

            </section>
        </div>
    );
}

export default ProjectPage;