"use client"
import styles from '@/app/styles/navbar.module.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'

const Header = () => {
  return (
    <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
            <Link href="/">
                <Image src="/logo.png" alt='my logo' width={150} height={40} priority={true} />

                
            </Link>
            <Nav/>

        </div>
    </header>
  )
}

export default Header
