import React, { SyntheticEvent } from "react";
import styles from './Input.module.css'


interface Prop {
    name: string,
    onChange?: (event: SyntheticEvent) => void,
    onBlur?: (event: SyntheticEvent) => void,
    value?: string,
    type?: 'text' | 'email' | 'password' | 'phone',
    label?: string,
    error?: string | boolean,
}

function Input({
    name,
    onChange,
    value,
    onBlur,
    type = "text",
    label,
    error,
}: Prop) {
    const inputTypes = {
        text: { placeholder: 'Your name', inputType: 'text' },
        email: { placeholder: 'Email', inputType: 'email' },
        phone: { placeholder: 'Phone', inputType: 'text' },
        password: { placeholder: 'Password', inputType: 'password' },
    };

    const { placeholder, inputType } = inputTypes[type] || inputTypes.text;

    return (
        <div className={styles.input_container} >
            <input
                name={name}
                placeholder={placeholder}
                type={inputType}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="off"
                className={styles.input}
            />
            {label && <div className={styles.label}>{label}</div>}
            {error && <div className={styles.error}>{error}</div>}
        </div >
    )
}

export default Input;
