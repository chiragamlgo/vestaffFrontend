import React from 'react'
import styles from "../styles/Footer.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.footerGridItem}>
                    <Link href="/">
                        <Image src="/logo.png" width={125} height={125} alt='logo' />
                    </Link>
                </div>
                <div className={styles.footerGridItem}>
                    <div className={styles.links}>
                        <h3>Services</h3>
                        <Link href="/"><p>Talent Acquistion</p></Link>
                        <Link href="/"><p>Job Hunting</p></Link>
                        <Link href="/"><p>AI Powered Recruitment</p></Link>
                    </div>
                </div>
                <div className={styles.footerGridItem}>
                    <div className={styles.links}>
                        <h3>Resources</h3>
                        <Link href="/"><p>Developers</p></Link>
                        <Link href="/"><p>Recruiters</p></Link>
                    </div>
                </div>
                <div className={styles.footerGridItem}>
                    <div className={styles.links}>
                        <h3>Connect</h3>
                        <Link href="/about-us"><p>About Us</p></Link>
                        <Link href="/contact-us"><p>Contact Us</p></Link>
                        {/* <Link href="/"><p>Reach Us</p></Link> */}
                    </div>
                </div>
            </div>

            <div className={styles.socialsContent}>
                <div className={styles.socialsLeft}>
                    <Link href="/">
                        <h3>Privacy Policy</h3>
                    </Link>
                    <Link href="/">
                        <h3>Terms and Conditions</h3>
                    </Link>
                </div>
                <div className={styles.socialsRight}>
                    <Link href="/"><FaLinkedin /></Link>
                    <Link href="/"><FaXTwitter /></Link>
                    <Link href="/"><FaInstagram /></Link>
                    <Link href="/"><FaFacebook /></Link>
                </div>
            </div>

            <div className={styles.copyright}>
                <h3>© VeStaff - 2024</h3>
            </div>
        </div>
    )
}

export default Footer
