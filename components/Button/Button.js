"use cleint"

import React from 'react'
import styles from './Button.module.css'
import Link from 'next/link'

let details = `I’m%20so%20excited%20to%20share%20the%20happiest%20day%20of%20my%20life%20with%20you!%20Your%20presence%20at%20my%20wedding%20would%20mean%20the%20world%20to%20me.%20I%20would%20love%20to%20celebrate%20this%20special%20day%20surrounded%20by%20the%20people%20I%20cherish%20most,%20and%20I%20hope%20you%20can%20join%20us%20in%20the%20joy%20and%20love%20of%20this%20moment.

Your%20presence%20would%20make%20my%20day%20even%20more%20memorable!%20🌸`

const Button = () => {
  return (
    <div className={styles.btnContainer}>
        <Link className={styles.btn} href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Harshitha%20Weds%20Ajay&dates=20241104T100000Z/20241104T110000Z&details=${details}&location=RATHNA%20CONVENTION%20CENTRE%20KOLAR%20MULABAGILU%20ROAD,%20KOLAR`} >Add to Calender</Link>
    </div>
  )
}

export default Button
