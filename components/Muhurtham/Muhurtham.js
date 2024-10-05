import React from 'react'
import styles from './Muhurtham.module.css'

const Muhurtham = () => {
  return (
    <main className='main'>
      <div className={styles.muhurthamSec}>
            <div className={styles.sec1} >
                <h1 className='title'>Muhurtham</h1>
                <p className={styles.p}>Monday <span className='bold'><span className='coral'>9</span>:20</span> <span className={styles.am}>AM</span> to <span className='bold'><span className='coral'>10</span>:20</span> <span className={styles.am}>AM</span></p>
            </div>
            <div className={styles.hrContainer}>
                <hr className={styles.hr} />
            </div>
            <div className={styles.sec1} >
                <h1 className='title'>Reception</h1>
                <p className={styles.p}><span className='bold'>0<span className='coral'>4</span>-11-2024</span><span className='bold'>, <span className='coral'>7</span>:00</span> <span className={styles.am}>PM</span> onwards</p>
            </div>
      </div>
    </main>
  )
}

export default Muhurtham
