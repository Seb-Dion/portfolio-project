import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutPic.png")} alt="Coder Pic" className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/schoolBag.png")} alt="School bag" />
                        <div className={styles.aboutItemText}>
                            <h3>University Student</h3>
                            <p>
                                I am a third year computer science student at the University of Florida, expected to graduate
                                in 2026
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/web-development.png")} alt="Computer" />
                        <div className={styles.aboutItemText}>
                            <h3>Relevant Coursework</h3>
                            <p>
                                I have taken Data Structures and Algorithms, along with Programming Fundamentals. I currently own 
                                a 3.41 GPA, which has landed me on the Dean's list
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/teaching.png")} alt="School club" />
                        <div className="{styles.aboutItemText}">
                            <h3>Extracirriculars</h3>
                            <p>
                                I am an active member of both the Software Engineering Club 
                                and the Open Source Club at UF
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
