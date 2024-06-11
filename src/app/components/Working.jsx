import React from 'react';
import styles from '../styles/Working.module.css';
import Image from 'next/image';

const Working = () => {
  return (
    <div className={styles.workingContainer}>
      <div className={styles.workingContent}>
        <h1>How VeStaff works?</h1>
        <div className={styles.cards}>
          <div className={`${styles.stepCard} ${styles.firstStepCard}`}>
            <Image src="/step-one-pic.jpg" width={200} height={200} alt='step'/>
            <p>Step 1</p>
            <h2>Register yourself on the platform of VeStaff.</h2>
          </div>

          <div className={styles.stepCard}>
            <Image src="/project.png" width={200} height={200} alt='step'/>
            <p>Step 2</p>
            <h2>Share your project details.</h2>
          </div>

          <div className={styles.stepCard}>
            <Image src="/resources.png" width={200} height={200} alt='step'/>
            <p>Step 3</p>
            <h2>Find Resources from VeStaff.</h2>
          </div>

          <div className={styles.stepCard}>
            <Image src="/skills.png" width={200} height={200} alt='step'/>
            <p>Step 4</p>
            <h2>Assess Skills</h2>
          </div>

          <div className={styles.stepCard}>
            <Image src="/contract.png" width={200} height={200} alt='step'/>
            <p>Step 5</p>
            <h2>Sign Contract</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
