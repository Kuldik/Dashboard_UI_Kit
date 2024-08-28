import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar'
import { Header } from '../../header/Header.jsx';
import styles from './CreditCard.module.css'

export default function Transactions() {
  return (
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <Header title="Credit Card"></Header>
    </div>
  )
}