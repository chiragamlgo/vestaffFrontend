"use client"
import React, { useState } from 'react'
import styles from "../styles/Features.module.css"
import Image from 'next/image';

const Features = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <div className={styles.featuresContainer}>
            <div className={styles.features}>

                <div className={styles.contentLeft}>
                    <h3>For enterprises</h3>
                    <h2>Unlock the success by getting the assured talent on time for your company.</h2>
                </div>

                <div className={styles.contentRight}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate consequatur quos, deserunt rem voluptates commodi neque molestias nam id vitae porro sed nihil? Eum animi veniam illum! Fuga, nulla?</p>
                    <button>Get started</button>
                </div>


            </div>

            <div className={styles.cards}>

                

                <div className={`${styles.flipCard} ${isFlipped ? styles.flipped : ''}`} onClick={handleFlip}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <Image src="/team.png" width={100} height={100} alt='team' />
                            <h2>Premium Remote Resources across the Country</h2>
                        </div>
                        <div className={styles.flipCardBack}>
                            <p>Discover top-tier talent nationwide. From bustling urban hubs to quiet corners, access premium resources for your business. Our platform connects you with elite candidates across diverse industries, ensuring exceptional hires that drive success.</p>
                            <button>Learn More</button>

                        </div>
                    </div>
                </div>

                <div className={`${styles.flipCard} ${isFlipped ? styles.flipped : ''}`} onClick={handleFlip}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <Image src="/email.png" width={100} height={100} alt='team' />
                            <h2>No offer loss guarantee</h2>
                        </div>
                        <div className={styles.flipCardBack}>
                            <p>Experience peace of mind with our 'No Offer Loss Guarantee'. We're committed to securing every opportunity for candidates and clients alike. With this assurance, rest easy knowing that no potential offer will slip through the cracks, ensuring a seamless journey towards success.</p>
                            <button>Learn More</button>

                        </div>
                    </div>
                </div>

                <div className={`${styles.flipCard} ${isFlipped ? styles.flipped : ''}`} onClick={handleFlip}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <Image src="/recruitment.png" width={100} height={100} alt='team' />
                            <h2>Immediately available Resources</h2>
                        </div>
                        <div className={styles.flipCardBack}>
                            <p>Empowering Tomorrow's Success Stories: At Our Firm, We Believe in the Power of Personalized Recruitment Strategies, Each Tailored to Uncover and Cultivate the Unique Talents That Will Propel Your Business Towards New Heights of Achievement and Innovation.</p>
                            <button>Learn More</button>

                        </div>
                    </div>
                </div>

               

            </div>
        </div>
    )
}

export default Features
