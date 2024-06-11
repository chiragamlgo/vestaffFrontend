import React from 'react'
import styles from "../styles/ClientList.module.css"
import Image from 'next/image'

const ClientList = () => {
  return (
    <div className={styles.clientContainer}>
        <div className={styles.clientContent}>
            <h3>VeStaff: Where leading enterprises, startups, and beyond find their trusted talent.</h3>
            <div className={styles.clientImages}> 
            <Image src="/alphabet.png" alt='logo' width={70} height={70}/>
            <Image src="/microsoft.png" alt='logo' width={70} height={70}/>
            <Image src="/merck.png" alt='logo' width={70} height={70}/>
            <Image src="/oracle.png" alt='logo' width={70} height={70}/>
            <Image src="/samsung.png" alt='logo' width={70} height={70}/>
            <Image src="/walmart.png" alt='logo' width={70} height={70}/>
            </div>
        </div>
    </div>
  )
}

export default ClientList
