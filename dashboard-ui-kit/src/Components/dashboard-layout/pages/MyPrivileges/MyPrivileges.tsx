import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar.tsx'
import { Header } from '../../header/Header.tsx';
import styles from './MyPrivileges.module.css'
/* eslint-disable */
// @ts-ignore
import First from '../../../Charts/BubbleChart.jsx';
// @ts-ignore
import Radar from './../../../Charts/Radar';
// @ts-ignore
import BubbleChart from './../../../Charts/BubbleChart';

export default function myPrivileges() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div>
        <Header title="My Privileges" />
          <div className={styles.main}>
            <div className={styles.charts}>
              <div className={styles.radar}>
                <Radar />
              </div>

              <div className={styles.bubble}>
                <BubbleChart/>
              </div>
            </div>
          </div>
        </div>
      </div>
          
  )
}