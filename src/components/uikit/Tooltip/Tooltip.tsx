import React, { useState } from "react";
import styles from './Tooltip.module.css'


interface Prop {
    text: string,
    children: any,
    disabled: boolean,
}

function Tooltip({ text, children, disabled }: Prop) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className={styles.tooltip_trigger}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {disabled && isVisible && <div className={styles.tooltip}>{text}</div>}
        </div>
    )
}

export default Tooltip;
