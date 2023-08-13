import React from "react";
import styles from './main.module.css'
import Button from "../uikit/Button/Button";


export const Main: React.FC = () => {
    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <div className={styles.title}>Test assignment for front-end developer</div>
                <div className={styles.subtitle}>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</div>
                <div className={styles.main_btn}>
                    <Button mode="primary">Sign Up</Button>
                </div>
            </div>
        </div>
    )
}
