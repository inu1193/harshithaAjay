"use cleint"

import React from 'react'
import styles from './Button.module.css'
import Link from 'next/link'

const Button = () => {
  return (
    <div className={styles.btnContainer}>
        <Link className={styles.btn} href='https://calendar.google.com/calendar/render?action=TEMPLATE&text=Harshitha%20Weds%20Ajay&dates=20241104T100000Z/20241104T110000Z&details=Harshitha%20Weds%20Ajay&location=RATHNA%20CONVENTION%20CENTRE%20KOLAR%20MULABAGILU%20ROAD,%20KOLAR' >Add to Calender</Link>
    </div>
  )
}

export default Button
