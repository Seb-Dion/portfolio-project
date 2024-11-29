import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

const Skill = ({ skill }) => (
    <div className={styles.skill}>
        <div className={styles.skillImageContainer}>
            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
        </div>
        <p>{skill.title}</p>
    </div>
);

const HistoryItem = ({ historyItem }) => (
    <li className={styles.historyItem}>
        <div className={styles.historyItemIcon}>
            <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
        </div>
        <div className={styles.historyItemDetails}>
            <h3>{historyItem.role}</h3>
            <h4>{historyItem.organisation}</h4>
            <p className={styles.duration}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
            <ul className={styles.experiences}>
                {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                ))}
            </ul>
        </div>
    </li>
);

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => (
                        <Skill key={id} skill={skill} />
                    ))}
                </div>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => (
                        <HistoryItem key={id} historyItem={historyItem} />
                    ))}
                </ul>
            </div>
        </section>
    );
};