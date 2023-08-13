import React from "react";
import styles from './Button.module.css'


interface Props {
    children?: JSX.Element | string;
    mode?: 'primary' | 'secondary'
    disabled?: boolean | undefined;
    onClick?: (e: Event | any) => void;
}

function Button({
    mode = 'primary',
    onClick,
    disabled,
    children
}: Props) {
    return (
        <button
            className={mode === 'primary' ? styles['primary'] : styles['secondary']}
            onClick={onClick}
            disabled={disabled}
            type='button'
        >
            {children}
        </button>
    )
}

export default Button;
