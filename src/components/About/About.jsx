import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
import { motion } from "framer-motion";

export const About = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className={styles.container} id="about">
            <motion.h2 
                className={styles.title}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h2>
            <div className={styles.content}>
                <motion.div 
                    className={styles.imageSection}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img 
                        src={getImageUrl("about/aboutPic.png")} 
                        alt="My workspace" 
                        className={styles.aboutImage}
                    />
                </motion.div>
                <div className={styles.aboutItems}>
                    <motion.div 
                        className={styles.card}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className={styles.cardIcon}>
                            <img src={getImageUrl("about/schoolBag.png")} alt="Education" />
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Education</h3>
                            <p>Computer Science Student at University of Florida</p>
                            <p className={styles.highlight}>Expected Graduation: 2026</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className={styles.card}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className={styles.cardIcon}>
                            <img src={getImageUrl("about/web-development.png")} alt="Academics" />
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Academic Achievement</h3>
                            <p>Data Structures & Algorithms</p>
                            <p className={styles.highlight}>GPA: 3.41 | Dean's List</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className={styles.card}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className={styles.cardIcon}>
                            <img src={getImageUrl("about/teaching.png")} alt="Activities" />
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Involvement</h3>
                            <p>Active Member</p>
                            <p className={styles.highlight}>Software Engineering & Open Source Club</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
