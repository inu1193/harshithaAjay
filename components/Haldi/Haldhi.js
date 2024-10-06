import React from 'react'
import styles from './Haldhi.module.css'

const Haldhi = () => {
  return (
    <main className='main'>
      <div className={styles.muhurthamSec}>
            <div className={styles.sec1} >
                <h1 className='title'>Haldi</h1>
                <p className={styles.p}><span className='bold'>0<span className='coral'>3</span>-11-2024</span><span className='bold'>, <span className='coral'>05</span>:30</span><span className={styles.am}>PM</span> onwards</p>
            </div>
            <div className={styles.hrContainer}>
                <hr className={styles.hr} />
            </div>
            <div className={styles.sec1} >
                <h1 className='title'>Sangeet</h1>
                <p className={styles.p}><span className='bold'>0<span className='coral'>3</span>-11-2024</span><span className='bold'>, <span className='coral'>08</span>:30</span><span className={styles.am}>PM</span> onwards</p>
            </div>
      </div>
    </main>
  )
}

export default Haldhi;
// Nothing much
