import React from 'react'
import styles from './countryItem.module.css'


interface Prop {
    country: any,
}

export const CountryItem: React.FC<Prop> = ({ country }) => {

    return (
        <div className={styles.county_item}>
            <div key={country.code}>
                <p>{country.name}</p>
                <p>{country.code}</p>
                <p>{country.phone}</p>
            </div>
        </div>
    )
}
