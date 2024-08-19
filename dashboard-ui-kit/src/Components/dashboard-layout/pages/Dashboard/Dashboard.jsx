import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar'
import { Header } from './../../header/Header';
import styles from './Dashboard.module.css'

export default function Transactions() {
  return (
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <div>
        <Header title="Overview"></Header>
        <div className={styles.main}>

          <div className={styles.cardsBlock}>
            
            <div className={styles.transcations}>

            </div>
          </div>

          <div className={styles.activity}>
            <div className={styles.weeklyActivity}>

            </div>
            <div className={styles.statistics}>

            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.transfer}>

            </div>
            <div className={styles.balance}>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}