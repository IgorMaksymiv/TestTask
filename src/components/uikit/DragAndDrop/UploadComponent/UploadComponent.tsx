import React, { ChangeEvent } from "react";
import styles from './UploadCoponent.module.css';


interface Prop {
    onPhotoChange: (e: Blob) => void;
    error?: string | boolean,
}

function UploadComponent({ onPhotoChange, error }: Prop) {
    const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onPhotoChange(file);
        }
    };

    const handleDisableClick = (event: React.MouseEvent<HTMLLabelElement>) => {
        event.preventDefault();
    }

    return (
        <>
            <div className={styles.upload_container}>
                <label htmlFor="photo" className={styles.upload_btn}>Upload</label>
                <input
                    id="photo"
                    name="photo"
                    type="file"
                    multiple
                    className={styles.upload_input}
                    onChange={handlePhotoChange}
                />
                <label
                    htmlFor="photo"
                    className={styles.upload_label}
                    onClick={handleDisableClick}
                >
                    Upload your photo
                </label>
            </div>
            {error && <div className={styles.error}>{error}</div>}
        </>
    );
}

export default UploadComponent;
