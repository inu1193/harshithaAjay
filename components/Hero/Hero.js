import React from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'
import heroImg from '../../assets/HeroImg.png'
import heroTitle from '../../assets/HeroTitle.png'

const Hero = () => {
  return (
    <main className='main'>
      <div className={styles.heroSection}>
            <div className={styles.heroImgContainer}>
                <Image src={heroImg} className={styles.heroImg} alt='Harshitha and Ajay Wedding' priority />
            </div>
            <div className={styles.right}>
                <p className={styles.p}>With <span className={styles.inP}>love</span> and <span className={styles.inP}>happiness</span>, I invite you and your family to celebrate my wedding!</p>
                <div className={styles.heroTitleContainer}>
                    <Image src={heroTitle} className={styles.heroTitle} alt='Harshitha weds Ajay' priority />
                </div>
            </div>
      </div>
    </main>
  )
}

export default Hero
