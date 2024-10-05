import React from 'react'
import styles from './venue.module.css'

const Venue = () => {
  return (
    <main className='main'>
      <div className={styles.venueSec}>
            <h1 className='title'>Venue</h1>
            <div className={styles.sec1}>
                <h2 className={styles.h2}>RATHNA CONVENTION CENTRE</h2>
                <p className={styles.p}>Kolar-Mulabagilu road, Kolar</p>
            </div>
      </div>
    </main>
  )
}

export default Venue
