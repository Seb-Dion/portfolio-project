import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Intro.module.css";
import { motion } from "framer-motion";

export const Intro = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <motion.div 
                    className={styles.textContainer}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className={styles.title}>
                        Hi, I'm <span className={styles.highlight}>Sebastian</span>
                    </h1>
                    <h2 className={styles.subtitle}>Computer Science Student</h2>
                    <p className={styles.description}>
                        University of Florida '26 | Aspiring Software Engineer
                    </p>
                    <div className={styles.btnContainer}>
                        <a href="mailto:swd7104@gmail.com" className={styles.contactBtn}>
                            Contact Me
                        </a>
                        <a href="#projects" className={styles.projectsBtn}>
                            View Projects
                        </a>
                    </div>
                </motion.div>
            </div>
            <motion.div 
                className={styles.imageContainer}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.imgWrapper}>
                    <img 
                        src={getImageUrl("Intro/myFace.png")} 
                        alt="Image of my face" 
                        className={styles.introImg}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </motion.div>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );    
}