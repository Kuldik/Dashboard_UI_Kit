import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar.tsx'
import { Header } from '../../header/Header.tsx';
import styles from './Settings.module.css'

export default function Transactions() {
  return (
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <Header title="Setting"></Header>
    </div>
  )
}