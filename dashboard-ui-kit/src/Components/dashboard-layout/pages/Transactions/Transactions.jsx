import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar'
import { Header } from './../../header/Header';
import styles from './Transactions.module.css'

export default function Transactions() {
  return (
    <div className={styles.wrapper}>
      <Sidebar title="Transactions"></Sidebar>
      <Header title="Transactions"></Header>
    </div>
  )
}