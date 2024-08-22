import React from 'react'
import styles from './Card.module.css'

export default function Card
({
  title,
  cardLabel,
  balance, 
  validationDate, 
  cardHolderName,
  cardNumber,
  backgroundColor,
  hideGradient,
  ...props
}) {
  return (
    <div className={styles.myCards}>
      <div className={styles.cardsTitleBox}>
        <div className={styles.cardsTitle}>{title}</div>
        <button className={styles.cardLabel}>{cardLabel}</button>
      </div>
      <div 
        className={styles.cardItems}
        style={{ backgroundColor: backgroundColor }}
      >
        <div className={styles.balanceBox}>
          <div className={styles.balanceItems}>
            <p>Balance</p>
            <div className={styles.balance}>{balance}</div>
          </div>
          <img src="/img/Cards/chipCard.svg" alt="chip" />
        </div>
        <div className={styles.clientInfo}>
          <div className={styles.nameBox}>
            <p>CARD HOLDER</p>
            <div className={styles.cardHolderName}>{cardHolderName}</div>
          </div>
          <div className={styles.validationDateBox}>
            <p>VALID THRU</p>
            <div className={styles.validationDate}>{validationDate}</div>
          </div>
        </div>
        <div className={`${styles.cardFooter} ${hideGradient ? styles.hideGradient : ''}`}>
          <div className={styles.cardNumber}>{cardNumber}</div>
          <img src="/img/Cards/visa.svg" alt="visa" />
        </div>
      </div>
    </div>
  )
}
