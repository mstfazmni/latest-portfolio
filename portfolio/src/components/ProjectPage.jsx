import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectPage.css";
import projects from "../data/projects";

const ProjectPage = () => {
    const {id} = useParams();
    const project = projects.find((p)=> p.id === id);

    if(!project) return <h2>Project Not Found</h2>;

    return(
        <div className="project-container">
            <section className="left-section">
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                
            </section>
            <section className="right-section">
                <img src={project.img} alt={project.name} className="project-img" />
                <ul>
                    {project.tech.map((t)=> (
                        <li key={t}>{t}</li>
                    ))}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer">Live Site</a>

            </section>
        </div>
    );
}

export default ProjectPage;