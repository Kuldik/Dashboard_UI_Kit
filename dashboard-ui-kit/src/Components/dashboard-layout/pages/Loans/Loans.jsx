import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar'
import { Header } from '../../header/Header.jsx';
import styles from './Loans.module.css'

export default function Transactions() {
  return (
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <Header title="Loans"></Header>
    </div>
  )
}