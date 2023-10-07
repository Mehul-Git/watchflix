import React from 'react'
import styles from "@/app/contact/contact.module.css"
import Link from 'next/link'
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";

const Contactcard = () => {
  return (
    <div className={styles.section}>
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.grid_card}>
                    <i> <MdEmail/> </i>
                    <h2>
                        Email
                    </h2>
                    <p> Monday to Friday expected </p>
                    <p className={styles.last_para}> Response Time: 72 hours</p>
                    <Link href="/"> Send Email <span> -&gt; </span></Link>
                </div> 
                <div className={styles.grid_card}>
                    <i> <MdVoiceChat/> </i>
                    <h2>
                        Live Chat
                    </h2>
                    <p> Weekdays: 9AM - 6PM IST</p>
                    <p className={styles.last_para}> Weekdays: 9AM - 6PM IST</p>
                    <Link href="/"> Chat now <span> -&gt; </span></Link>
                </div>

                <div className={styles.grid_card}>
                    <i> <MdForum/> </i>
                    <h2>
                        Community forum
                    </h2>
                    <p> Monday to Friday expected </p>
                    <p className={styles.last_para}> Response Time: 72 hours</p>
                    <Link href="/"> Ask the Community <span> -&gt; </span></Link>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Contactcard
