import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2>Let's Connect</h2>
                    <p>Open to opportunities and collaborations</p>
                </div>
                
                <div className={styles.linksContainer}>
                    <a 
                        href="mailto:swd7104@gmail.com" 
                        className={styles.emailLink}
                    >
                        <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                        <span>swd7104@gmail.com</span>
                    </a>
                    
                    <div className={styles.socialLinks}>
                        <a 
                            href="https://www.linkedin.com/in/sebastian-dion-199053276/" 
                            className={styles.socialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
                            <span>LinkedIn</span>
                        </a>
                        <a 
                            href="https://github.com/Seb-Dion" 
                            className={styles.socialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className={styles.copyright}>
                <p>© 2024 Sebastian Dion. All rights reserved.</p>
            </div>
        </footer>
    );
};