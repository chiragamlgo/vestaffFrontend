import React from 'react';
import styles from '../styles/Information.module.css';
import Image from 'next/image';

const Information = () => {
  return (
    <div className={styles.info}>
      <div className={styles.infoContent}>
        <div className={styles.left}>
          <Image src="/info.jpg" width={500} height={500} alt='info'/>
        </div>
        <div className={styles.right}>
          <h2>Unlock success with our Unique Invitation only talent solutions platform for your company.</h2>
          <p>Transform your company's success with our customized talent solutions. From sourcing the best candidates to seamless onboarding, we ensure the perfect fit for your team.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Information;
