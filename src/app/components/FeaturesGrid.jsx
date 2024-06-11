import React from 'react'
import styles from "../styles/FeaturesGrid.module.css"

const FeaturesGrid = () => {
  return (
    <div className={styles.gridContainer}>
<h2>Innovate your business with AI powered <span>Recruitment</span></h2>
        <div className={styles.featuresGrid}>
        <div className={`${styles.gridItem} ${styles.item1}`}>One</div>
        <div className={`${styles.gridItem} ${styles.item2}`}>Two</div>
        <div className={`${styles.gridItem} ${styles.item3}`}>Three</div>
        <div className={`${styles.gridItem} ${styles.item4}`}>Four</div>

           
        </div>
   
    </div>
  )
}

export default FeaturesGrid
