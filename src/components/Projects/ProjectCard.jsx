import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source },
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div 
            className={styles.container}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ y: -10 }}
        >
            <div className={styles.imageContainer}>
                <img
                    src={getImageUrl(imageSrc)}
                    alt={`Image of ${title}`}
                    className={styles.image}
                />
                {isHovered && (
                    <div className={styles.overlay}>
                        <motion.div 
                            className={styles.links}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <a href={demo} className={styles.link}>
                                Live Demo
                            </a>
                            <a href={source} className={styles.link}>
                                Source Code
                            </a>
                        </motion.div>
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <ul className={styles.skills}>
                    {skills.map((skill, id) => (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};