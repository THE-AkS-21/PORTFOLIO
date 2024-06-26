import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}><img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"  />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience 0-2 years.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I'm a growing Backend developer. Expanding my knowledge</p>
                    </div>
                </li>

                <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI DESIGNER</h3>
                        <p>I'm a UI Designer with an impressive imaginations and skills</p>
                    </div>
                </li>
                
            </ul>
            </div>
        </section>
    )
}