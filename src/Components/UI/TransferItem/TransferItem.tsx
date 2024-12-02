import React from 'react'
import styles from './TransferItem.module.css'
export default function TransferItem
( 
    {
        name,
        position,
        icon
    } :
    {
        name?: string,
        position?: string,
        icon?: string
    }
) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.transferItemBox}>
            <div className={styles.transferItem}>
                <div className={styles.Icon}>
                    <img src={icon} alt="icon" />
                </div>
                <div className={styles.name}>
                    <b>{name}</b>
                </div>
                <div className={styles.position}>
                    {position}
                </div>
            </div> 
        </div>
    </div>
  )
}
