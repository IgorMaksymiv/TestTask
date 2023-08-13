import React from "react";
import styles from './RadioButton.module.css'


interface Prop {
    label?: string,
    isChecked: boolean,
    onChange: () => void,
    error?: string | boolean,
}

function RadioButton({ label, isChecked, onChange, error }: Prop) {

    return (
        <label>
            <input
                type="radio"
                className={styles.checkbox}
                checked={isChecked}
                onChange={onChange}
            />
            {label && (
                <label
                    className={styles.label}
                    onClick={onChange}
                >
                    {label}
                </label>
            )}
            {error && <div className={styles.error}>{error}</div>}
        </label>
    )
}

export default RadioButton;
