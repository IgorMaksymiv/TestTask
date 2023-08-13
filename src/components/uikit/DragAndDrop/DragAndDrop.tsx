import React, { useState } from "react";
import styles from './DragAndDrop.module.css'

import UploadComponent from "./UploadComponent/UploadComponent";
import Close from "../Icons/Close";


interface Prop {
    onPhotoUpload: (content: Blob | null) => void,
}

function DragAndDrop({ onPhotoUpload }: Prop) {
    const [selectedPhoto, setSelectedPhoto] = useState(null || '');

    const handlePhotoChange = (content: Blob) => {
        setSelectedPhoto(URL.createObjectURL(content));
        onPhotoUpload(content);
    };

    const handleRemovePhoto = () => {
        setSelectedPhoto(null || '');
        onPhotoUpload(null);

    };

    return (
        <div>
            {!selectedPhoto && <UploadComponent onPhotoChange={handlePhotoChange} />}
            {selectedPhoto && (
                <div className={styles.foto_container}>
                    <img
                        src={selectedPhoto}
                        alt="User_Photo"
                        className={styles.img}
                    />
                    <label
                        onClick={handleRemovePhoto}
                        className={styles.icon_close}
                    >
                        <Close />
                    </label>
                </div>
            )}
        </div>
    )
}

export default DragAndDrop;
