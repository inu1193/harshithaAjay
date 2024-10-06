"use cleint"

import React from 'react'
import styles from './Button.module.css'
import Link from 'next/link'

let details = `We’re%20so%20excited%20to%20celebrate%20our%20wedding%20with%20you!%20Your%20presence%20would%20make%20our%20day%20truly%20special.%20🌸
`;

const Button = () => {
  return (
    <div className={styles.btnContainer}>
        <Link className={styles.btn} href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Harshitha%20Weds%20Ajay&dates=20241104T035000Z/20241104T045000Z&details=${details}&location=RATHNA%20CONVENTION%20CENTRE%20KOLAR%20MULABAGILU%20ROAD,%20KOLAR`} >Add to Calender</Link>
    </div>
  )
}

export default Button
