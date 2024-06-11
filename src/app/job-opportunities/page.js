import React from 'react'
import styles from "../styles/pages/JobOpportunities.module.css"
import Image from 'next/image'
import Button from '@mui/material/Button'
import ClientList from '../components/ClientList'
import JobList from '../components/JobList'

const page = () => {
    return (
        <div className={styles.jobInfo}>
            <div className={styles.jobHeroContainer}>
                <div className={styles.jobImage}>
                    <Image src="/opportunity.png" width={800} height={800} alt='opportunity' />
                </div>
                <div className={styles.jobInfoContent}>
                    <h1>Latest remote opportunities</h1>
                    <p>Welcome to VeStaff jobs where you'll find the best remote software roles. Apply now, and work with top U.S. companies from the comfort of your home. Get long-term, full-time job opportunities and be a part of the elite 1% of the world's remote engineers.</p>
                    <Button variant="contained" color="primary">
                        Apply Now
                    </Button>
                </div>
            </div>
            <ClientList/>
            <JobList/>
        </div>
    )
}

export default page
