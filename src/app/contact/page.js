import React from 'react'
import Contactcard from "@/app/components/Contactcard"
import styles from "./contact.module.css"
import Contactform from '../components/Contactform'

const contact = () => {
  return (
    <>
    <div className={styles.container}>
    <h1>CONTACT US</h1>
    <Contactcard/>
    </div>
    <section className={styles.contact_section}>
      <h2>WE WOULD LOVE TO HEAR <span> FROM YOU </span> </h2>
      <Contactform/>

    </section>
    </>
  )
}

export default contact
