import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar'
import { Header } from './../../header/Header';
import styles from './Investments.module.css'

export default function Transactions() {
  return (
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <Header title="Investments"></Header>
    </div>
  )
}