import React from 'react'
import styles from './TransactionItem.module.css'

export default function TransactionItem
    ({
        icon,
        title,
        date,
        amount,
        amountColor
} : { 
  icon?: string, 
  title?: string, 
  date?: string, 
  amount?: string, 
  amountColor?: string
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.info}>
            <div className={styles.iconBox}>
                <img src={icon} alt="icon" />
            </div>
            <div className={styles.textInfo}>
                <div className={styles.titleBox}>
                    {title}
                </div>
                <div className={styles.dateBox}>
                    <p>{date}</p>
                </div>
            </div>
        </div>
        <div className={styles.amountBox}>
            <span style={{ color: amountColor }}>{amount}</span>
        </div>
      </div>
    </div>
  )
}
