import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar'
import { Header } from './../../header/Header';
import styles from './MyPrivileges.module.css'

export default function Transactions() {
  return (
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <Header title="My Privileges"></Header>
    </div>
  )
}