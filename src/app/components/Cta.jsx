import React from 'react';
import styles from "../styles/Cta.module.css";
import Image from 'next/image';

const Cta = () => {
    return (
        <div className={styles.ctaContainer}>
            <div className={styles.ctaContent}>
                <div className={styles.ctaLeft}>
                    <h2>Want to accelerate your business with <span>VeStaff</span> Solutions?</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatibus praesentium a, excepturi sed sapiente culpa necessitatibus saepe, dolorem voluptatum corrupti aliquid, fugiat doloremque? Recusandae natus dolorem vero dolores inventore.</p>
                    <button>Get Started</button>
                </div>
                <div className={styles.ctaRight}>
                    <Image width={500} height={500} alt='cta' src="/cta.png" />
                </div>
            </div>
        </div>
    );
};

export default Cta;
