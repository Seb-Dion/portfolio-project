import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Intro.module.css";


export const Intro = () => {
    return (
        <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sebastian</h1>
            <p className={styles.description}>I'm a computer science student at the University of Florida.</p>
            <a href="mailto:swd7104@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("Intro/myFace.png")} alt="Image of my face" className={styles.introImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );    
}