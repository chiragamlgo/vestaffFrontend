"use client";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "../styles/JobList.module.css";
import { FaBuilding, FaUsers, FaTools, FaLocationArrow, FaBriefcase } from "react-icons/fa";
import { Button } from "@mui/material";

const JobList = () => {
    const initialJobs = [
        {
            title: "Software Engineer",
            company: "Tech Corp",
            location: "San Francisco, CA",
            url: "https://example.com/job/1",
            industry: "Technology",
            teamSize: "5-10",
            skills: ["JavaScript", "React", "Node.js"],
            description: "We are seeking a talented and passionate Software Engineer to join our dynamic development team. The ideal candidate will have a strong background in software development, excellent problem-solving skills, and a drive to create high-quality software solutions.",
            responsibilities: [
                "Design, develop, and maintain software applications.",
                "Collaborate with cross-functional teams to define and implement innovative solutions.",
                "Write clean, scalable, and efficient code using appropriate programming languages and frameworks.",
                "Participate in code reviews to ensure code quality and adherence to best practices.",
                "Troubleshoot, debug, and optimize existing software applications."
            ],
            qualifications: [
                "Bachelor's degree in Computer Science or related field.",
                "3+ years of experience in software development.",
                "Proficiency in JavaScript, React, and Node.js.",
                "Strong problem-solving and analytical skills.",
                "Excellent communication and teamwork abilities."
            ]
        },
        {
            title: "Product Manager",
            company: "Business Inc.",
            location: "New York, NY",
            url: "https://example.com/job/2",
            industry: "Business",
            teamSize: "10-20",
            skills: ["Agile", "Scrum", "Leadership"],
            description: "Oversee product development from inception to launch. Collaborate with cross-functional teams to define, build, and launch new products.",
            responsibilities: [
                "Define product vision and strategy.",
                "Lead cross-functional teams to deliver high-quality products.",
                "Manage product lifecycle from conception to launch.",
                "Conduct market research to identify customer needs.",
                "Create and manage product roadmaps."
            ],
            qualifications: [
                "Bachelor's degree in Business Administration, Marketing, or related field.",
                "5+ years of experience in product management.",
                "Strong understanding of Agile and Scrum methodologies.",
                "Excellent leadership and communication skills.",
                "Proven track record of managing all aspects of a successful product throughout its lifecycle."
            ]
        },
        {
            title: "Graphic Designer",
            company: "Creative Studio",
            location: "Remote",
            url: "https://example.com/job/3",
            industry: "Creative",
            teamSize: "3-5",
            skills: ["Photoshop", "Illustrator", "Creativity"],
            description: "Design visual content for digital and print media. Work on a variety of projects that include branding, marketing materials, and digital content.",
            responsibilities: [
                "Create visually appealing graphics for various media.",
                "Collaborate with marketing and design teams.",
                "Maintain brand consistency across all designs.",
                "Develop design concepts, graphics, and layouts.",
                "Stay up-to-date with industry trends and tools."
            ],
            qualifications: [
                "Bachelor's degree in Graphic Design or related field.",
                "2+ years of experience in graphic design.",
                "Proficiency in Adobe Photoshop and Illustrator.",
                "Strong creative and artistic skills.",
                "Excellent attention to detail and time management skills."
            ]
        },
        {
            title: "Data Scientist",
            company: "Data Solutions",
            location: "Austin, TX",
            url: "https://example.com/job/4",
            industry: "Data",
            teamSize: "5-10",
            skills: ["Python", "R", "Machine Learning"],
            description: "Analyze data to extract actionable insights. Apply statistical techniques and machine learning algorithms to solve business problems.",
            responsibilities: [
                "Analyze large datasets to identify trends and patterns.",
                "Develop and implement machine learning models.",
                "Communicate findings to stakeholders.",
                "Collaborate with engineering and product teams.",
                "Stay current with advancements in data science."
            ],
            qualifications: [
                "Master's degree in Data Science, Statistics, Computer Science, or related field.",
                "4+ years of experience in data science or related field.",
                "Proficiency in Python and R.",
                "Experience with machine learning frameworks.",
                "Strong analytical and problem-solving skills."
            ]
        },
        {
            title: "Marketing Specialist",
            company: "Marketing Experts",
            location: "Chicago, IL",
            url: "https://example.com/job/5",
            industry: "Marketing",
            teamSize: "10-15",
            skills: ["SEO", "Content Marketing", "Social Media"],
            description: "Plan and execute marketing campaigns. Develop strategies to increase brand awareness and drive traffic to our platforms.",
            responsibilities: [
                "Develop and implement marketing strategies.",
                "Manage and optimize SEO and SEM campaigns.",
                "Create and manage content for social media.",
                "Analyze marketing data and metrics.",
                "Collaborate with sales and product teams."
            ],
            qualifications: [
                "Bachelor's degree in Marketing, Communications, or related field.",
                "3+ years of experience in marketing.",
                "Strong understanding of SEO and SEM strategies.",
                "Excellent written and verbal communication skills.",
                "Proficiency in social media management and content creation."
            ]
        }
    ];

    const [jobs, setJobs] = useState(initialJobs);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [selectedJob, setSelectedJob] = useState(initialJobs[0]);

    useEffect(() => {
        setSelectedJob(initialJobs[0]);
    }, []);

    const fetchJobs = () => {
        const newJobs = [
            {
                title: `New Job Title ${page * 5 + 1}`,
                company: `New Company ${page * 5 + 1}`,
                location: "Some Location",
                url: `https://example.com/job/${page * 5 + 1}`,
                industry: "Industry Placeholder",
                teamSize: "Team Size Placeholder",
                skills: ["Skill 1", "Skill 2", "Skill 3"],
                description: "Job description goes here."
            },
            {
                title: `New Job Title ${page * 5 + 2}`,
                company: `New Company ${page * 5 + 2}`,
                location: "Some Location",
                url: `https://example.com/job/${page * 5 + 2}`,
                industry: "Industry Placeholder",
                teamSize: "Team Size Placeholder",
                skills: ["Skill 1", "Skill 2", "Skill 3"],
                description: "Job description goes here."
            }
        ];

        setJobs((prevJobs) => [...prevJobs, ...newJobs]);
        setPage((prevPage) => prevPage + 1);
        setHasMore(newJobs.length > 0);
    };

    const openJobDetail = (job) => {
        setSelectedJob(job);
    };

    return (
        <div className={styles.container}>
            <div className={styles.jobListContainer}>
                <InfiniteScroll
                    dataLength={jobs.length}
                    next={fetchJobs}
                    hasMore={hasMore}
                    scrollableTarget="scrollableDiv"
                    endMessage={
                        <p className={styles.endMessage}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div id="scrollableDiv" className={styles.scrollContainer}>
                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className={`${styles.job} ${job === selectedJob ? styles.selectedJob : ""}`}
                                onClick={() => openJobDetail(job)}
                            >
                                <h2 className={styles.jobTitle}>{job.title}</h2>
                                <div className={styles.company}>

                                    <p className={styles.jobIndustry}>
                                        <FaBriefcase /> {job.industry}
                                    </p>

                                    <p className={styles.jobTeamSize}>
                                        <FaUsers /> {job.teamSize}
                                    </p>

                                </div>

                                <p className={styles.jobSkills}>
                                    <FaTools /> {job.skills.join(", ")}
                                </p>
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>

                <div className={styles.jobDetail}>
                    <h2 className={styles.jobTitle}>{selectedJob.title}</h2>
                    <div className={styles.descContainer}>
                        <div className={styles.upperDescription}>
                            <p className={styles.jobLocation}>
                                <FaLocationArrow /> {selectedJob.location}
                            </p>
                            <p className={styles.jobIndustry}>
                                <FaBriefcase /> {selectedJob.industry}
                            </p>
                            <p className={styles.jobTeamSize}>
                                <FaUsers /> {selectedJob.teamSize}
                            </p>
                            <p className={styles.jobSkills}>
                                <FaTools /> {selectedJob.skills.join(", ")}
                            </p>
                        </div>

                        <div>
                            <Button variant="contained" color="primary">
                                Apply Now
                            </Button>
                        </div>
                    </div>
                    <hr />

                    <div className={styles.completeDesc}>
                        <h2>Job description</h2>
                        <p className={styles.jobDescription}>{selectedJob.description}</p>

                        <h2>Key Responsibilities</h2>
                        <ul className={styles.jobResponsibilities}>
                            {selectedJob.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>

                        <h2>Required Qualifications</h2>
                        <ul className={styles.jobResponsibilities}>
                            {selectedJob.qualifications.map((qualification, index) => (
                                <li key={index}>{qualification}</li>
                            ))}
                        </ul>
                    </div>
                    <hr />
                    <div className={styles.features}>
                        <h2>How to get registered with VeStaff?</h2>
                        <p>You are one step closer to get your dream job.</p>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <p>1</p>
                                <h3>Invitation Code</h3>
                                <p>This is an invitation only platform. You'll get an invitation code on your email.</p>
                            </div>
                            <div className={styles.step}>
                                <p>2</p>
                                <h3>Registration</h3>
                                <p>Once you get the Invitation Code, Register on our portal with all your details.</p>
                            </div>
                            <div className={styles.step}>
                                <p>3</p>
                                <h3>Assesment</h3>
                                <p>After your profile is created, Go through the assesments and test according to your skills.</p>
                            </div>
                            <div className={styles.step}>
                                <p>4</p>
                                <h3>Apply</h3>
                                <p>Based on your test score, Apply through the jobs listed on VeStaff.</p>
                            </div>
                        </div>
                        <Button variant="contained" color="primary">
                                Apply Now
                            </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobList;
