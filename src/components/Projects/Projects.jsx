import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => (
                    <div className={styles.projectCard} key={id}>
                        <div className={styles.content}>
                            <div className={styles.projectInfo}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.skills}>
                                    {project.skills.map((skill, index) => (
                                        <span key={index} className={styles.skill}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.links}>
                                    <a href={project.demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                                        Live Demo
                                        <ExternalLink size={18} />
                                    </a>
                                    <a href={project.source} className={styles.link} target="_blank" rel="noopener noreferrer">
                                        Source Code
                                        <Github size={18} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.imageContainer}>
                                <img 
                                    src={getImageUrl(project.imageSrc)} 
                                    alt={project.title}
                                    className={styles.projectImage}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};