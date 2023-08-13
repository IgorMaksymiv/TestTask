import React, { useState } from 'react'
import styles from './postRequest.module.css'
import Form from '../Form/Form';


export const PostRequest: React.FC = () => {

    return (
        <div className={styles.request_container}>
            <h1 className={styles.request_title}>Working with POST request</h1>
            <Form />
        </div>
    )
}
