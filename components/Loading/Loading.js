import React from 'react'
import styles from './Loading.module.css'
import Image from 'next/image'
import logo from '../../assets/harshJay.png';


const Loading = () => {
  return (
    <div className={styles.logoContainer}>
      <Image src={logo} className={styles.logo} alt='Hashitha weds Ajay Kumar' priority />
      <p>Loading...</p>
    </div>
  )
}

export default Loading
