import React from 'react';
import styles from "../styles/NumberData.module.css";

const NumberData = () => {
    return (
        <div className={styles.numberData}>
            <div className={styles.content}>
                <h2>Staffing by the Digits: <span>Insights in Numbers.</span></h2>
                <p>Unlocking Insights: Delve into Our Staffing Statistics and Discover the Metrics Defining Our Success! From the number of placements to client satisfaction rates, explore the comprehensive data shaping our staffing journey.</p>
                <div className={styles.numbers}>
                    <div className={styles.clients}>
                        <h1>50+ Clients</h1>
                    </div>
                    <div className={styles.resources}>
                        <h1>250+ Resources</h1>
                    </div>
                    <div className={styles.opportunities}>
                        <h1>1000+ Opportunities</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberData;
