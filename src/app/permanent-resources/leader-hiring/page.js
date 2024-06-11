import React from 'react'
import styles from "../../styles/pages/LeaderHiring.module.css"
import Image from 'next/image'
import ClientList from '@/app/components/ClientList'
import Working from '@/app/components/Working'

const page = () => {
  return (
    <div className={styles.container}>

      {/* Hero */}
      <div className={styles.leaderHero}>
        <div className={styles.leaderContent}>
          <h2>Are you looking to hire the <br />Top Leaders?</h2>
          <p>Finding the right leaders requires a unique set of hiring skills, and at our organization, we excel in this area. Our extensive network and strong relationships with top industry professionals enable us to identify and attract the most talented leaders for your organization. By leveraging our deep connections and expertise, we ensure that you have access to the best candidates who can drive your company's success and growth.</p>
          <button>Hire Leaders</button>
        </div>

        <div className={styles.leaderImg}>
          <Image src="/leader.png" width={800} height={800} alt='leader' />
        </div>
      </div>

      {/* Client List */}
      <ClientList />

      {/* Information */}
      <div className={styles.infoContainer}>
        <div className={styles.leaderInfo}>
          <div className={styles.infoContent}>
            <h2>Are you looking to hire the Top Leaders?</h2>
            <p>Finding the right leaders requires a unique set of hiring skills, and at our organization, we excel in this area. Our extensive network and strong relationships with top industry professionals enable us to identify and attract the most talented leaders for your organization. By leveraging our deep connections and expertise, we ensure that you have access to the best candidates who can drive your company's success and growth.</p>
            <button>Hire Leaders</button>
          </div>
          <div className={styles.leaderImg}>
          <Image src="/leader2.jpg" width={400} height={400} alt='leader' />
        </div>
        </div>
      </div>


      {/* Working */}
      <Working />
    </div>
  )
}

export default page
