import React from 'react'
import styles from './Card.module.css'

export default function Card({title, label}) {
  return (
    <div className={styles.myCards}>
        <div className={styles.cardsTitleBox}>
            <div className={styles.cardsTitle}>{title}</div>
            <div className={styles.cardsLabel}>{label}</div>
        </div>
    </div>
  )
}
