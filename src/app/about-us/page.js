import React from 'react'
import styles from "../styles/pages/AboutUs.module.css"
import ClientList from '../components/ClientList'
import Image from 'next/image'
import Features from '../components/Features'
import Working from '../components/Working'


const page = () => {
    return (
        <div className={styles.aboutUs}>
            <div className={styles.aboutHero}>
                <h1>Discover the <span>VeStaff's</span> Story: <br />Crafting <span>Success</span> Through <span>Talent</span></h1>
                <p>Step into the world of <span>Ve Staff</span>, where talent meets opportunity. Our story is one of innovation and empowerment, where we redefine staffing solutions with passion and dedication. Join us as we shape the future of employment, connecting exceptional individuals with unmatched opportunities for success.</p>
            </div>

            {/* Our Vision */}
            <div className={styles.vision}>
                <div className={styles.visionContent}>
                    <div className={styles.visionLeft}>
                        <h2>Our Vision</h2>
                        <p>At VeStaff, we envision a world where careers flourish and businesses thrive. Our goal is to be the bridge that connects talent with opportunity, crafting success stories that redefine the future of work. With creativity as our compass and diversity as our strength, we're sculpting a landscape where every individual finds their perfect fit and every organization unlocks its full potential. Join us in shaping a brighter tomorrow, one placement at a time.</p>
                    </div>
                    <div className={styles.visionRight}>
                        <Image src="/vision.png" height={300} width={300} alt='vision'/>
                    </div>
                </div>
            </div>

            {/* Our Mission */}
            <div className={styles.vision}>
                <div className={styles.visionContent}>
                <div className={styles.visionRight}>
                        <Image src="/mission.png" height={500} width={500} alt='vision'/>
                    </div>
                    <div className={styles.visionLeft}>
                        <h2>Our Mission</h2>
                        <p>At VeStaff, we're on a mission to turn dreams into careers and vacancies into victories. Our vision? To be the matchmaker of opportunity, uniting talent with the perfect stage to shine. With a sprinkle of innovation, a dash of diversity, and a whole lot of heart, we're rewriting the script on staffing, one success story at a time. Join us in sculpting a future where every career is a masterpiece waiting to be painted.</p>
                    </div>
                    
                </div>
            </div>

            <Features/>
            <Working/>

        </div>
    )
}

export default page
