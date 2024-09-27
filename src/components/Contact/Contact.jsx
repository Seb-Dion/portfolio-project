import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl  } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                    <a href="mailto:sebastiandion@ufl.edu">sebastiandion@ufl.edu</a>
                </li>
                <li className={styles.link}>
                    <img src = {getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
                    <a href ="https://www.linkedin.com/in/sebastian-dion-199053276/">linkedin.com/in/sebastian-dion-199053276/</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
                    <a href = "https://github.com/Seb-Dion">github.com/Seb-Dion</a>
                </li>
            </ul>
        </footer>
    );
};