import React from 'react'
import styles from "../../styles/pages/NoOfferLoss.module.css"

import Image from 'next/image'
import Features from '@/app/components/Features'
import Working from '@/app/components/Working'



const page = () => {
    return (
        <div className={styles.aboutUs}>
            <div className={styles.aboutHero}>
                <h1>Tired of loosing candidates after releasing offer letter?</h1>
                <p>Transform your hiring process and boost your offer acceptance rate with our innovative strategies and tailored solutions. Discover how our expert approach can turn potential rejections into enthusiastic acceptances, ensuring you secure the top talent you need to drive success.</p>
                <button>Get Started</button>
            </div>

            {/* Our Vision */}
            <div className={styles.vision}>
                <div className={styles.visionContent}>
                    <div className={styles.visionLeft}>
                        <h2>No Offer Loss - Contract Signing</h2>
                        <p>Ensure every offer leads to a signed contract with our "No Offer Loss" approach. Our specialized solutions guarantee that your top candidates transition seamlessly from offer to acceptance, securing the talent your organization needs to thrive.
                        </p>
                    </div>
                    <div className={styles.visionRight}>
                        <Image src="/offerloss.png" height={300} width={300} alt='vision' />
                    </div>
                </div>
            </div>

            {/* Our Mission */}
            <div className={styles.vision}>
                <div className={styles.visionContent}>
                    <div className={styles.visionRight}>
                        <Image src="/guarantee.png" height={500} width={500} alt='vision' />
                    </div>
                    <div className={styles.visionLeft}>
                        <h2>Guaranteed Joining</h2>
                        <p>Ensure every offer translates into a confirmed hire with our "Guaranteed Joining" approach. Our comprehensive strategies and expert solutions guarantee that your top candidates not only accept your offers but also become integral members of your team.</p>
                    </div>

                </div>
            </div>

            <Features />
            <Working />

        </div>
    )
}

export default page
