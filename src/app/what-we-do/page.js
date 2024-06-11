"use client"
import React, { useState } from 'react';
import styles from "../styles/pages/WhatWeDo.module.css";
import Image from 'next/image';
import ClientList from '../components/ClientList';
import { Button, TextField } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import BlogCards from '../components/BlogCards';
import VerticalSteps from '../components/VerticalSteps';

const page = () => {
    const [skills, setSkills] = useState(Array.from({ length: 20 }));
    const [roles, setRoles] = useState(Array.from({ length: 20 }));
    const [seniority, setSeniority] = useState(Array.from({ length: 20 }));

    const fetchMoreSkills = () => {
        setSkills(prevSkills => [...prevSkills, ...Array.from({ length: 20 })]);
    };

    const fetchMoreRoles = () => {
        setRoles(prevRoles => [...prevRoles, ...Array.from({ length: 20 })]);
    };

    const fetchMoreSeniority = () => {
        setSeniority(prevSeniority => [...prevSeniority, ...Array.from({ length: 20 })]);
    };

    return (
        <div className={styles.description}>
            <div className={styles.descriptionHero}>
                <div className={styles.descriptionLeft}>
                    <h4>Hire talent from largest talent network.</h4>
                    <h2>Scale your Company's Workforce on demand</h2>
                    <p>Accelerate your software engineering and close skill gaps with our technical professionals and teams. Hire developers, engineers, and more vetted and matched using AI.</p>
                    <button>Hire Professionals</button>
                </div>
                <div className={styles.descriptionRight}>
                    <Image src="/man.png" width={800} height={800} alt='man' />
                </div>
            </div>
            <ClientList />
            <div className={styles.information}>
                <div className={styles.informationContent}>
                    <div className={styles.informationLeft}>
                        <h2>Tired of traditional recruiting to hire candidates?</h2>
                        <p>More thorough than traditional interviews, we test for both popular and niche skills, data structures, algorithms, systems design, software specializations, and frameworks.</p>
                        <p>Spend less time hiring developers and more time building and delivering on your priority projects—with effortless onboarding, performance, and management support.</p>
                    </div>
                    <div className={styles.informationRight}>
                        <Image src="/hr.jpg" width={300} height={300} alt='hr' />
                    </div>
                </div>
            </div>
            <div className={styles.information}>
                <div className={styles.informationContent}>
                    <div className={styles.informationRight}>
                        <Image src="/hrteam.jpg" width={300} height={300} alt='hr' />
                    </div>
                    <div className={styles.informationLeft}>
                        <h2>Why hire candidates with VeStaff?</h2>
                        <p>More thorough than traditional interviews, we test for both popular and niche skills, data structures, algorithms, systems design, software specializations, and frameworks.</p>
                        <p>Spend less time hiring developers and more time building and delivering on your priority projects—with effortless onboarding, performance, and management support.</p>
                    </div>
                </div>
            </div>
            <div className={styles.documentation}>
                <div className={styles.informationContent}>
                    <div className={styles.informationLeft}>
                        <h2>Enhancing technical proficiency assessments by 40%</h2>
                        <p>Learn how we built our AI-powered source, vetting, and matching platform for successful job candidate identification, lead scoring, supply and demand forecasting, and marketing spend optimization.</p>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: 'gray',
                                }
                            }}
                        >
                            Read
                        </Button>
                    </div>
                    <div className={styles.informationRight}>
                        <Image src="/hrteam.jpg" width={300} height={300} alt='hr' />
                    </div>
                </div>
            </div>
            <div className={styles.talentSkill}>
                <div className={styles.skillContainer}>
                    <div className={styles.heading}>
                        <h2>Find Talent by skills, role or seniority</h2>
                    </div>
                    <TextField
                        label="Search"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{
                            backgroundColor: 'white',
                            color: 'black',
                            width: '80%'
                        }}
                    />
                    <div className={styles.skillListContainer}>
                        <div className={styles.skills}>
                            <h1>Skills</h1>
                            <InfiniteScroll
                                dataLength={skills.length}
                                next={fetchMoreSkills}
                                hasMore={true}
                                loader={<h4>Loading...</h4>}
                                height={400}
                                endMessage={<p>Yay! You have seen it all</p>}
                            >
                                {skills.map((_, index) => (
                                    <p key={index}>Skill {index + 1}</p>
                                ))}
                            </InfiniteScroll>
                        </div>
                        <div className={styles.roles}>
                            <h1>Roles</h1>
                            <InfiniteScroll
                                dataLength={roles.length}
                                next={fetchMoreRoles}
                                hasMore={true}
                                loader={<h4>Loading...</h4>}
                                height={400}
                                endMessage={<p>Yay! You have seen it all</p>}
                            >
                                {roles.map((_, index) => (
                                    <p key={index}>Role {index + 1}</p>
                                ))}
                            </InfiniteScroll>
                        </div>
                        <div className={styles.seniority}>
                            <h1>Seniority</h1>
                            <InfiniteScroll
                                dataLength={seniority.length}
                                next={fetchMoreSeniority}
                                hasMore={true}
                                loader={<h4>Loading...</h4>}
                                height={400}
                                endMessage={<p>Yay! You have seen it all</p>}
                            >
                                {seniority.map((_, index) => (
                                    <p key={index}>Seniority {index + 1}</p>
                                ))}
                            </InfiniteScroll>
                        </div>
                    </div>
                </div>
            </div>
<VerticalSteps/>
            <BlogCards />
        </div>
    );
};

export default page;
