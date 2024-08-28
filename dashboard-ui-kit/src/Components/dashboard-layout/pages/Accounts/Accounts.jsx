import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar.jsx'
import { Header } from '../../header/Header.jsx';
import styles from './Accounts.module.css'

export default function Transactions() {
  return (
    // 
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <Header title="Accounts"></Header>
    </div>
  )
}