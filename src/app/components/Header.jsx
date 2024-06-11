// "use client"
// import React, { useState } from 'react';
// import styles from "../styles/Header.module.css";
// import Image from 'next/image';
// import Link from 'next/link';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [activeDropdown, setActiveDropdown] = useState(null);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const toggleDropdown = (dropdown) => {
//         if (activeDropdown === dropdown) {
//             setActiveDropdown(null);
//         } else {
//             setActiveDropdown(dropdown);
//         }
//     };

//     const closeDropdown = () => {
//         setActiveDropdown(null);
//     };

//     return (
//         <div className={styles.header}>
//             <div className={styles.headerContainer}>

//                 <div className={styles.logo}>
//                     <Link href="/">
//                         <Image height={100} width={100} src="/logo.png" alt='logo' />
//                     </Link>
//                 </div>

//                 <div className={isMenuOpen ? `${styles.links} ${styles.showMenu}` : styles.links}>
//                     <a onClick={() => toggleDropdown('what-we-do')}>What we do</a>
//                     <a onClick={() => toggleDropdown('resources')}>Resources</a>
//                     <a onClick={() => toggleDropdown('for-developers')}>For developers</a>
//                     <a onClick={() => toggleDropdown('about-us')}>About Us</a>
//                 </div>

//                 <div className={styles.buttons}>
//                     <Link href="/"><button>Register</button></Link>
//                     <Link href="/"><button>Login</button></Link>
//                 </div>

//                 <div className={styles.hamburgerMenu} onClick={toggleMenu}>
//                     <div className={`${styles.bar} ${isMenuOpen && styles.animateBar1}`}></div>
//                     <div className={`${styles.bar} ${isMenuOpen && styles.animateBar2}`}></div>
//                     <div className={`${styles.bar} ${isMenuOpen && styles.animateBar3}`}></div>
//                 </div>
//             </div>

//             {activeDropdown === 'what-we-do' && (
//                 <div className={styles.dropdown}>
//                     {/* <h1>What we do</h1> */}

//                     <button className={styles.closeButton} onClick={closeDropdown}>&times;</button>
//                     <div className={styles.dropdownContent}>
//                         <div className={styles.dropdownContentlinks}>
//                             <h2>Permanent Resources</h2>
//                             <Link href="/">No Offer Loss</Link>
//                             <Link href="/">Guarantee Joining</Link>
//                             <Link href="/">Leader's Hiring</Link>
//                         </div>
//                         <div className={styles.dropdownContentlinks}>
//                             <h2>Remote Resources</h2>
//                             <Link href="/">Early Join</Link>
                           
//                         </div>

//                         <div className={styles.dropdownContentlinks}>
//                             <h2>On Demand Resources</h2>
//                             <Link href="/">Proffessionals and Teams</Link>
                           
//                         </div>
//                     </div>
//                 </div>
//             )}
//             {activeDropdown === 'resources' && (
//                 <div className={styles.dropdown}>
//                     <button className={styles.closeButton} onClick={closeDropdown}>&times;</button>
//                     <div className={styles.dropdownContent}>
//                         <div className={styles.dropdownContentlinks}>
//                             <h2>Learn</h2>
//                             <Link href="/">Blog</Link>
//                             <Link href="/">More Resources</Link>
                           
//                         </div>
//                         <div className={styles.dropdownContentlinks}>
//                             <h2>Connect</h2>
//                             <Link href="/">Contact Us</Link>
//                             <Link href="/">Help Center</Link>
                           
//                         </div>

//                     </div>
//                 </div>
//             )}
//             {activeDropdown === 'for-developers' && (
//                 <div className={styles.dropdown}>
//                     <button className={styles.closeButton} onClick={closeDropdown}>&times;</button>
//                     <div className={styles.dropdownContent}>
//                         <div className={styles.dropdownContentlinks}>
//                             <Link href="/">Job Opportunities</Link>
//                             <Link href="/">How to get Hired</Link>
//                             <Link href="/">Developer Resources</Link>
//                             <Link href="/">Developer Support</Link>
                           
//                         </div>
                        

//                     </div>
//                 </div>
//             )}
//             {activeDropdown === 'about-us' && (
//                 <div className={styles.dropdown}>
//                     <button className={styles.closeButton} onClick={closeDropdown}>&times;</button>
//                     <h2>About Us</h2>
//                     <p>Content for About Us</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Header;


// "use client"
// import React, { useState, useEffect } from 'react';
// import styles from "../styles/Header.module.css";
// import Image from 'next/image';
// import Link from 'next/link';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [activeDropdown, setActiveDropdown] = useState(null);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const toggleDropdown = (dropdown) => {
//         if (activeDropdown === dropdown) {
//             setActiveDropdown(null);
//         } else {
//             setActiveDropdown(dropdown);
//         }
//     };

//     const closeDropdown = () => {
//         setActiveDropdown(null);
//     };

//     useEffect(() => {
//         const handleEsc = (event) => {
//             if (event.key === 'Escape') {
//                 closeDropdown();
//             }
//         };

//         document.addEventListener('keydown', handleEsc);
//         return () => {
//             document.removeEventListener('keydown', handleEsc);
//         };
//     }, []);

//     return (
//         <div className={styles.header}>
//             <div className={styles.headerContainer}>

//                 <div className={styles.logo}>
//                     <Link href="/">
//                         <Image height={100} width={100} src="/logo.png" alt='logo' />
//                     </Link>
//                 </div>

//                 <div className={isMenuOpen ? `${styles.links} ${styles.showMenu}` : styles.links}>
//                     <a onClick={() => toggleDropdown('what-we-do')}>What we do</a>
//                     <a onClick={() => toggleDropdown('resources')}>Resources</a>
//                     <a onClick={() => toggleDropdown('for-developers')}>For developers</a>
//                     <Link href="/about-us">About Us</Link>
//                 </div>

//                 <div className={styles.buttons}>
//                     <Link href="/"><button>Register</button></Link>
//                     <Link href="/"><button>Login</button></Link>
//                 </div>

//                 <div className={styles.hamburgerMenu} onClick={toggleMenu}>
//                     <div className={`${styles.bar} ${isMenuOpen && styles.animateBar1}`}></div>
//                     <div className={`${styles.bar} ${isMenuOpen && styles.animateBar2}`}></div>
//                     <div className={`${styles.bar} ${isMenuOpen && styles.animateBar3}`}></div>
//                 </div>
//             </div>

//             {activeDropdown === 'what-we-do' && (
//                 <div className={styles.dropdown}>
//                     <button className={styles.closeButton} onClick={closeDropdown}>&times;</button>
//                     <div className={styles.dropdownContent}>
//                         <div className={styles.dropdownContentlinks}>
//                             <h2>Permanent Resources</h2>
//                             <Link href="/">No Offer Loss</Link>
//                             <Link href="/">Guarantee Joining</Link>
//                             <Link href="/">Leader's Hiring</Link>
//                         </div>
//                         <div className={styles.dropdownContentlinks}>
//                             <h2>Remote Resources</h2>
//                             <Link href="/">Early Join</Link>
//                         </div>
//                         <div className={styles.dropdownContentlinks}>
//                             <h2>On Demand Resources</h2>
//                             <Link href="/what-we-do">Professionals and Teams</Link>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {activeDropdown === 'resources' && (
//                 <div className={styles.dropdown}>
//                     <button className={styles.closeButton} onClick={closeDropdown}>&times;</button>
//                     <div className={styles.dropdownContent}>
//                         <div className={styles.dropdownContentlinks}>
//                             <h2>Learn</h2>
//                             <Link href="/">Blog</Link>
//                             <Link href="/">More Resources</Link>
//                         </div>
//                         <div className={styles.dropdownContentlinks}>
//                             <h2>Connect</h2>
//                             <Link href="/">Contact Us</Link>
//                             <Link href="/">Help Center</Link>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {activeDropdown === 'for-developers' && (
//                 <div className={styles.dropdown}>
//                     <button className={styles.closeButton} onClick={closeDropdown}>&times;</button>
//                     <div className={styles.dropdownContent}>
//                         <div className={styles.dropdownContentlinks}>
//                             <Link href="/">Job Opportunities</Link>
//                             <Link href="/">How to get Hired</Link>
//                             <Link href="/">Developer Resources</Link>
//                             <Link href="/">Developer Support</Link>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Header;

"use client"
import React, { useState, useEffect } from 'react';
import styles from "../styles/Header.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (dropdown) => {
        if (activeDropdown === dropdown) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdown);
        }
    };

    const closeDropdown = () => {
        setActiveDropdown(null);
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                closeDropdown();
            }
        };

        const handleClickOutside = (event) => {
            if (!event.target.closest(`.${styles.dropdown}`) && !event.target.closest(`.${styles.links}`)) {
                closeDropdown();
            }
        };

        const handleScroll = () => {
            closeDropdown();
        };

        document.addEventListener('keydown', handleEsc);
        document.addEventListener('click', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image height={100} width={100} src="/logo.png" alt='logo' />
                    </Link>
                </div>
                <div className={isMenuOpen ? `${styles.links} ${styles.showMenu}` : styles.links}>
                    <span onClick={() => toggleDropdown('what-we-do')}>What we do</span>
                    <span onClick={() => toggleDropdown('resources')}>Resources</span>
                    <span onClick={() => toggleDropdown('for-developers')}>For developers</span>
                    <Link href="/about-us">About Us</Link>
                </div>
                <div className={styles.buttons}>
                    <Link href="/auth/register">
                        <button>Get Started</button>
                    </Link>
                    <Link href="/auth/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className={styles.hamburgerMenu} onClick={toggleMenu}>
                    <div className={`${styles.bar} ${isMenuOpen && styles.animateBar1}`}></div>
                    <div className={`${styles.bar} ${isMenuOpen && styles.animateBar2}`}></div>
                    <div className={`${styles.bar} ${isMenuOpen && styles.animateBar3}`}></div>
                </div>
            </div>
            {activeDropdown === 'what-we-do' && (
                <div className={styles.dropdown}>
                    <button className={styles.closeButton} onClick={closeDropdown}>&times;</button>
                    <div className={styles.dropdownContent}>
                        <div className={styles.dropdownContentlinks}>
                            <h2>Permanent Resources</h2>
                            <Link href="/permanent-resources/no-offer-loss" onClick={closeDropdown}>No Offer Loss</Link>
                            <Link href="/permanent-resources/leader-hiring" onClick={closeDropdown}>Leader's Hiring</Link>
                        </div>
                        <div className={styles.dropdownContentlinks}>
                            <h2>Remote Resources</h2>
                            <Link href="#" onClick={closeDropdown}>Early Join</Link>
                        </div>
                        <div className={styles.dropdownContentlinks}>
                            <h2>On Demand Resources</h2>
                            <Link href="/what-we-do" onClick={closeDropdown}>Professionals and Teams</Link>
                        </div>
                    </div>
                </div>
            )}
            {activeDropdown === 'resources' && (
                <div className={styles.dropdown}>
                    <button className={styles.closeButton} onClick={closeDropdown}>&times;</button>
                    <div className={styles.dropdownContent}>
                        <div className={styles.dropdownContentlinks}>
                            <h2>Learn</h2>
                            <Link href="#" onClick={closeDropdown}>Blog</Link>
                            <Link href="#" onClick={closeDropdown}>More Resources</Link>
                        </div>
                        <div className={styles.dropdownContentlinks}>
                            <h2>Connect</h2>
                            <Link href="#" onClick={closeDropdown}>Contact Us</Link>
                            <Link href="#" onClick={closeDropdown}>Help Center</Link>
                        </div>
                    </div>
                </div>
            )}
            {activeDropdown === 'for-developers' && (
                <div className={styles.dropdown}>
                    <button className={styles.closeButton} onClick={closeDropdown}>&times;</button>
                    <div className={styles.dropdownContent}>
                        <div className={styles.dropdownContentlinks}>
                            <Link href="/job-opportunities" onClick={closeDropdown}>Job Opportunities</Link>
                            <Link href="#" onClick={closeDropdown}>How to get Hired</Link>
                            <Link href="#" onClick={closeDropdown}>Developer Resources</Link>
                            <Link href="#" onClick={closeDropdown}>Developer Support</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
