"use client"
import React, { useState } from 'react';
import styles from "../styles/Faq.module.css";
import Image from 'next/image';
import { IoMdArrowDropdown } from "react-icons/io";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: 'How does VeStaff work?',
            answer: 'Our AI powered invitation only platform help companies find the right talent for permanent (with no hire loss guarantee), contractual and remote on demand positions.',
        },
        {
            question: 'How do you guarantee for No Hire Loss',
            answer: 'Since this is an invitation only platform, we only invite candidates who are serious and willing to sign the joining agreement along with an offer acceptance.',
        },
        {
            question: 'I am a jobseeker and wants to register on VeStaff platform, How can I register ?',
            answer: 'Since this is an invitation only platform, you can not register yourself, we send invitation links to only those who are selected by our AI agent in its assessment based upn many criterias like technical assessment, experience, social score, behaviour score etc. In case you believe you are eligile for the registration pls email and our team willl verify.',
        },
        {
            question: 'I am a jobseeker and I accepted the offer, what is the guarantee that the Employer will not delay my joining?',
            answer: 'VeStaff makes the agreement with the Employer so that it can not extend/cancel the joining date of the candidate so as to avoid him from the financial losses and this helps the candidate to mitigate the risk of not getting/ postponing of the joining date.',
        },
        {
            question: 'I am a job seeker, will I be on VeStaff payroll and Employer payroll?',
            answer: 'For all the permanent positions, candidate will work directly with Employer Payroll, vestaff just facilicates the joining date confirmation and guaranteed joinnig. However for remote positions and short term needs you will be on veStaff payroll.',
        },
        {
            question: 'How much time does it take to onbaord a remote resource to the work for the employer?',
            answer: 'It usually takes from a week to 10 days to start with remote resources as we have access to lasrge databse of remote people looking for change.',
        },
        // Add more FAQ items as needed
    ];

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className={styles.faqContainer}>
            <div className={styles.imageContainer}>
                <Image src="/faq2.jpg" height={500} width={500} alt='faq' />
            </div>
            <div className={styles.faqGrid}>
                <h1>Frequently Asked Questions</h1>
                {faqData.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <div className={styles.faqContent}>
                            <div
                                className={`${styles.faqQuestion} ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                {faq.question}
                                <IoMdArrowDropdown />
                            </div>
                            {activeIndex === index && (
                                <div className={styles.faqAnswer}>{faq.answer}</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
