import React, { useState } from 'react'
import styles from './Form.module.css'
import Button from '../uikit/Button/Button'
import Input from '../uikit/Input/Input';
import RadioInput from '../uikit/RadioButton/RadioButton';
import DragAndDrop from '../uikit/DragAndDrop/DragAndDrop';
import Tooltip from '../uikit/Tooltip/Tooltip';

import * as Yup from 'yup';
import { useFormik } from 'formik'


interface Prop {
    name?: string,
    email?: string,
    phone?: string,
    position?: string,
    photo?: Blob | null,
}

const ProfileSchema = Yup.object().shape({
    name: Yup.string()
        .required("Firstname is required"),
    email: Yup.string()
        .required("Email is required").email('Invalid email address'),
    phone: Yup.string()
        .matches(/^\+?38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Invalid phone number format')
        .required("Phone is required"),
    position: Yup.string()
        .required('Position is required'),
    photo: Yup.string()
        .required('Photo is required'),
});

function Form({
    name,
    email,
    phone,
    position,
    photo,
}: Prop) {
    const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const onSubmit = (value: Prop) => {
        console.log(value);
        setShowSuccessMessage(true);
        console.log(showSuccessMessage);
    }

    const formik = useFormik({
        initialValues: {
            name: name || '',
            email: email || '',
            phone: phone || '',
            position: position || '',
            photo: photo || null,
        },
        validationSchema: ProfileSchema,
        onSubmit,
    })

    if (formik.isValid) {
        console.log("Форма є валідною");
    } else {
        console.log("Форма не є валідною");
    }

    const handlePositionChange = (position: string) => {
        setSelectedPosition(position);
        formik.setFieldValue('position', position);
    }

    const handleSignUp = () => {
        localStorage.setItem("formikValues", JSON.stringify(formik.values));
        setShowSuccessMessage(true);
        console.log("Form values:", formik.values);
    }

    const handlePhotoUpload = (file: Blob | null) => {
        formik.setFieldValue('photo', file);
    };

    return (
        <>
            {showSuccessMessage ? (
                <div className={styles.successful_container}>
                    <div className={styles.successful_title}>User successfully registered</div>
                    <div className={styles.succesful_image}></div>
                </div>
            ) : (
                <>
                    <form className={styles.form_container}>

                        <Input
                            name='name'
                            type='text'
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            error={formik.touched.name && formik.errors.name}
                        />
                        <Input
                            name='email'
                            type='email'
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            error={formik.touched.email && formik.errors.email}
                        />
                        <Input
                            name='phone'
                            type='text'
                            value={formik.values.phone}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && formik.errors.phone}
                            label='+38 (XXX) XXX - XX - XX'
                        />
                        <div>
                            <div className={styles.select_title}>Select your position</div>
                            <div className={styles.select_container}>
                                <RadioInput
                                    label='Frontend developer'
                                    isChecked={selectedPosition === 'Frontend developer'}
                                    onChange={() => handlePositionChange('Frontend developer')}
                                />
                                <RadioInput
                                    label='Backend developer'
                                    isChecked={selectedPosition === 'Backend developer'}
                                    onChange={() => handlePositionChange('Backend developer')}
                                />
                                <RadioInput
                                    label='Designer'
                                    isChecked={selectedPosition === 'Designer'}
                                    onChange={() => handlePositionChange('Designer')}
                                />
                                <RadioInput
                                    label='QA'
                                    isChecked={selectedPosition === 'QA'}
                                    onChange={() => handlePositionChange('QA')}
                                />
                            </div>
                        </div>
                        <div>
                            <DragAndDrop onPhotoUpload={handlePhotoUpload} />
                        </div>
                        <div className={styles.container_btn}>

                            <Tooltip
                                text={'Please fill in the fields, select a position and add photo'}
                                disabled={!formik.isValid || !formik.dirty}
                            >
                                <Button
                                    disabled={!formik.isValid || !formik.dirty}
                                    onClick={handleSignUp}
                                >
                                    Sign up
                                </Button>
                            </Tooltip>
                        </div>
                    </form>
                </>
            )}
        </>
    )
}

export default Form;
