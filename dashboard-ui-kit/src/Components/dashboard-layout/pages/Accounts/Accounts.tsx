import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar.tsx'
import { Header } from '../../header/Header.tsx';
import styles from './Accounts.module.css'
/* eslint-disable */
// @ts-ignore
import Card from '../../../UI/Card/Card.tsx'
// @ts-ignore
import Charts from '../../../Charts/TransactionsChart.jsx';
/* eslint-enable */

export default function Transactions() {
  return (
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <div>
        <Header title="Accounts"></Header>
        <div className={styles.main}>

          <div className={styles.balanceBox}>
            <div className={styles.balanceItems}>
              <div className={styles.balanceItem}>
                <div className={styles.iconBox}>
                  <img src="/img/Transactions/myBalance.svg" alt="#" />
                </div>
                <div className={styles.itemsBox}>
                  <p className={styles.text}>My Balance</p>
                  <b className={styles.number}>$12,750</b>
                </div>
              </div>
              <div className={styles.balanceItem}>
                <div className={styles.iconBox}>
                  <img src="/img/Transactions/income.svg" alt="#" />
                </div>
                <div className={styles.itemsBox}>
                  <p className={styles.text}>Income</p>
                  <b className={styles.number}>$5,600</b>
                </div>
              </div>
              <div className={styles.balanceItem}>
                <div className={styles.iconBox}>
                  <img src="/img/Transactions/expense.svg" alt="#" />
                </div>
                <div className={styles.itemsBox}>
                  <p className={styles.text}>Expense</p>
                  <b className={styles.number}>$3,460</b>
                </div>
              </div>
              <div className={styles.balanceItem}>
                <div className={styles.iconBox}>
                  <img src="/img/Transactions/total.svg" alt="#" />
                </div>
                <div className={styles.itemsBox}>
                  <p className={styles.text}>Total Saving</p>
                  <b className={styles.number}>$7,920</b>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.transactionsBox}>
            <div className={styles.lastTransactions}>
              <div className={styles.titleBox}>
                <p className={styles.title}>Last Transactions</p>
              </div>
              <div className={styles.transactionsMain}>
                <div className={styles.transactionsItem}>

                  <div className={styles.iconBox}>
                    <img src="/img/Transactions/bell.svg" alt="" />
                  </div>

                  <div className={styles.textBox}>
                    <b className={styles.title}>Spotify Subscription</b>
                    <p className={styles.date}>25 Jan 2021</p>
                  </div>

                  <div className={styles.transcationType}>
                    <p>Shopping</p>
                  </div>

                  <div className={styles.card}>
                    <p>1234 ****</p>
                  </div>
                  
                  <div className={styles.status}>
                    <p>Pending</p>
                  </div>

                  <div className={styles.amount}>
                    <p>-$150</p>
                  </div>
                </div>
                <div className={styles.transactionsItem}>

                <div className={styles.iconBox}>
                  <img src="/img/Transactions/service.svg" alt="" />
                </div>

                <div className={styles.textBox}>
                  <b className={styles.title}>Spotify Subscription</b>
                  <p className={styles.date}>25 Jan 2021</p>
                </div>

                <div className={styles.transcationType}>
                  <p>Shopping</p>
                </div>

                <div className={styles.card}>
                  <p>1234 ****</p>
                </div>

                <div className={styles.status}>
                  <p>Pending</p>
                </div>

                <div className={styles.amount}>
                  <p>-$150</p>
                </div>
                </div>

                <div className={styles.transactionsItem}>

                <div className={styles.iconBox}>
                  <img src="/img/Transactions/profile.svg" alt="" />
                </div>

                <div className={styles.textBox}>
                  <b className={styles.title}>Spotify Subscription</b>
                  <p className={styles.date}>25 Jan 2021</p>
                </div>

                <div className={styles.transcationType}>
                  <p>Shopping</p>
                </div>

                <div className={styles.card}>
                  <p>1234 ****</p>
                </div>

                <div className={styles.status}>
                  <p>Pending</p>
                </div>

                <div className={styles.amount}>
                  <p>-$150</p>
                </div>
                </div>

              </div>
            </div>

            <div className={styles.CardBox}>
              <Card
                title="My Card"
                balance="$5,756"
                validationDate="12/22"
                cardHolderName="Eddy Cusuma"
                cardNumber="3778 **** **** 1234"
                gradientWidth="362px" 
                gradientColor="#0A06F4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}