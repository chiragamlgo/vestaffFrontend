// import React from 'react';
// import styles from "../styles/Hero.module.css";
// import Image from 'next/image';

// const Hero = () => {
//   return (
//     <div className={styles.heroContainer}>
//       <Image src="/Hero.png" width={1540} height={1540} className={styles.heroImg} alt='hero'/>

//       <div className={styles.content}>
//         <div className={styles.heroHeading}>
//           <h2>Unlock success with our tailored talent solutions for your company.</h2>
//           <p>Transform your company's success with our customized talent solutions. From sourcing the best candidates to seamless onboarding, we ensure the perfect fit for your team.</p>
//           <button>Get Started</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from 'react'
import styles from "../styles/Hero.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <h2>Digitalize your business with our AI powered invitation-only talent platform having 50000+ resources.</h2>
          <p>Transform your company's success with our customized talent solutions. From sourcing the best candidates to seamless onboarding, we ensure the perfect fit for your team.</p>
         <Link href="/auth/register" >
         <button>Get Started</button>
         </Link> 
        </div>
        <div className={styles.heroRight}>
          <Image src="/man.png" height={600} width={600} alt='man' />
        </div>
      </div>
    </div>
  )
}

export default Hero
