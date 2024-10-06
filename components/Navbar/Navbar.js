'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import logo from '../../assets/harshJay.png';
import Link from 'next/link';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link, event) => {
    event.preventDefault();
    setActiveLink(link);
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className='body'>
    <header className={styles.header}>
      <div className={styles.logoParent}>
        <Image className={styles.logoIcon} alt="Wedding Logo" src={logo} width={90} height={70} />
        <div className={styles.frameParent}>
          <div className={styles.welcomeParent}>
          {/* <div className={styles.frameChild} /> */}
          </div>
          <div className={styles.saveTheDate}>
            <Link 
              href="#home" 
              onClick={(e) => handleLinkClick('#home', e)} 
              className={activeLink === 'home' ? `${styles.activeLink} active` : ''}
            >
              Welcome
            </Link>
          </div>
          <div className={styles.saveTheDate}>
            <Link 
              href="#save-the-date" 
              onClick={(e) => handleLinkClick('#save-the-date', e)} 
              className={activeLink === 'save-the-date' ? `${styles.activeLink} active` : ''}
            >
              Save the Date
            </Link>
          </div>
          <div className={styles.saveTheDate}>
            <Link 
              href="#muhurtham" 
              onClick={(e) => handleLinkClick('#muhurtham', e)} 
              className={activeLink === 'muhurtham' ? `${styles.activeLink} active` : ''}
            >
              Muhurtham
            </Link>
          </div>
          <div className={styles.saveTheDate}>
            <Link 
              href="#reception" 
              onClick={(e) => handleLinkClick('#reception', e)} 
              className={activeLink === 'reception' ? `${styles.activeLink} active` : ''}
            >
              Venue
            </Link>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Navbar;
