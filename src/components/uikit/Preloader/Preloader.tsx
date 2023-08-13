import React from "react";
import styles from './Preloader.module.css'

function Preloader() {
    return (
        <div className={styles.preloader_container}>
            <div className={styles.preloader}></div>
        </div >

    )
}

export default Preloader;