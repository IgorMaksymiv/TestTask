import React from "react";
import styles from './header.module.css'
import Logo from '../../assets/img/Logo.svg'
import Button from "../uikit/Button/Button";


export const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <div className={styles.header_content}>
                    <div className={styles.logo}>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className={styles.header_btn}>
                        <Button mode="primary">Users</Button>
                        <Button mode="primary">Sign Up</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
