'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState('home');

  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoParent}>
        <img className={styles.logoIcon} alt="Wedding Logo" src={logo.src} />
        <div className={styles.frameParent}>
          <div className={styles.welcomeParent}>

            <div className={styles.frameChild} />
          </div>
          <div className={styles.saveTheDate}>
            <Link href="#Home" passHref>
              <span 
                onClick={() => handleLinkClick('home')}
                className={activeLink === 'home' ? styles.activeLink : ''}
              >
                Welcome
              </span>
            </Link>
          </div>
          <div className={styles.saveTheDate}>
            <Link href="#save-the-date" passHref>
              <span 
                onClick={() => handleLinkClick('save-the-date')}
                className={activeLink === 'save-the-date' ? styles.activeLink : ''}
              >
                Wedding Date
              </span>
            </Link>
          </div>
          <div className={styles.saveTheDate}>
            <Link href="#muhurtham" passHref>
              <span 
                onClick={() => handleLinkClick('muhurtham')}
                className={activeLink === 'muhurtham' ? styles.activeLink : ''}
              >
                Muhurtham
              </span>
            </Link>
          </div>
          <div className={styles.saveTheDate}>
            <Link href="#reception" passHref>
              <span 
                onClick={() => handleLinkClick('reception')}
                className={activeLink === 'reception' ? styles.activeLink : ''}
              >
                Reception
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
