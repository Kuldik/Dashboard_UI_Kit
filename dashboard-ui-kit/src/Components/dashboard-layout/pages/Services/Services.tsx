import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar.tsx'
import { Header } from '../../header/Header.tsx';
import styles from './Services.module.css'

export default function Transactions() {
  return (
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <Header title="Services"></Header>
    </div>
  )
}