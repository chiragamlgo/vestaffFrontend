import React from 'react'
import styles from "../styles/VerticalSteps.module.css"
import { FaNetworkWired, FaUsers, FaClipboardCheck, FaRegThumbsUp } from "react-icons/fa6";
import { Button } from '@mui/material';

const VerticalSteps = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.stepsContainer}>

            <div className={styles.leftContent}>
                <h2>Hiring <span>Software Developer</span> on demand is easy.</h2>
            </div>
            <div className={styles.verticalSteps}>
                <div className={styles.steps}>
                    <FaNetworkWired className={styles.icon} />
                    <div>
                        <h3>Access our Network</h3>
                        <p>After talking to one of our technical matching experts, you'll get access to our deep talent profiles.</p>
                    </div>
                </div>

                <div className={styles.steps}>
                    <FaUsers className={styles.icon} />
                    <div>
                        <h3>Find the Right Fit</h3>
                        <p>We help you to find the best fit for your project by matching you with the right developer.</p>
                    </div>
                </div>

                <div className={styles.steps}>
                    <FaClipboardCheck className={styles.icon} />
                    <div>
                        <h3>Project Kickoff</h3>
                        <p>Once you find the perfect fit, you can start your project immediately with our streamlined process.</p>
                    </div>
                </div>

                <div className={styles.steps}>
                    <FaRegThumbsUp className={styles.icon} />
                    <div>
                        <h3>Ongoing Support</h3>
                        <p>We provide continuous support to ensure your project is a success from start to finish.</p>
                    </div>
                </div>

                {/* <div className={styles.cta}>
                    <h2>Get started by connecting with our technical matching experts—with talent recommendations in as little as a day.</h2>
                    <Button variant="contained">Talk to an expert</Button>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default VerticalSteps
