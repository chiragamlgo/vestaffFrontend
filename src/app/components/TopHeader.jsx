import React from 'react'
import styles from "../styles/TopHeader.module.css"
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import Link from 'next/link';


const TopHeader = () => {
    return (
        <div className={styles.topHeader}>
            <div className={styles.contact}>
                <h4><MdOutlinePhoneInTalk style={{color: "#ff5956", fontSize: "1.5rem"}}/><span>+91-9999999999</span></h4>
                <h4><IoIosMail style={{color: "#ff5956", fontSize: "1.5rem"}}/><span>info@vestaff.com</span></h4>
            </div>
            <div className={styles.info}>
                <h4 style={{color: "#ff5956"}}>Recent : <span>Fullstack Developer, Gurugram</span></h4>
                <Link href="/">Post Job <FaArrowRightLong /></Link>
            </div>
            <div className={styles.socials}>
                <Link href="/"><MdFacebook /></Link>
                <Link href="/"><FaInstagram /></Link> 
                <Link href="/"><FaLinkedin /></Link> 
                <Link href="/"><FaTwitter /></Link>
            </div>
        </div>
    )
}

export default TopHeader
