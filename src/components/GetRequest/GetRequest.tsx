import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { CountryItem } from "../CountryItem/CountryItem";

import styles from './getRequest.module.css'
import Button from "../uikit/Button/Button";
import Preloader from "../uikit/Preloader/Preloader";


const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
    }
  }
`;

export const GetRequest: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const { loading, error, data } = useQuery(GET_COUNTRIES)
  // console.log(data)

  if (loading) return <Preloader/>
  if (error) return <p>Error: {error.message}</p>

  const toggleShowAll = () => {
    setShowAll(pre => !pre)
  }

  const visibleItems = showAll ? data.countries.slice(0, 12) : data.countries.slice(0, 6);

  return (
    <div className={styles.request_container}>
      <h1 className={styles.request_title}>Working with GET request</h1>
      <div className={styles.country_container}>
        {visibleItems.map((country: any) => {
          return <CountryItem key={country.code} country={country} />
        })}
      </div>
      <div className={styles.container_btn}>
        <Button onClick={toggleShowAll}>{showAll ? "Hide more" : "Show more"}</Button>
      </div>
    </div>
  )
}
