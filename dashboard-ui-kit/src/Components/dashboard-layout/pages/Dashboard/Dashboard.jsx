import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar'
import { Header } from './../../header/Header';
import styles from './Dashboard.module.css'
import Card from '../../../UI/Card/Card';
import TransactionItem from '../../../UI/TransactionItem/TransactionItem';
import Charts from './../../../Charts/Chart';
import Diagram from '../../../Charts/Diagram';

export default function Transactions() {
  return (
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <div>
        <Header title="Overview"></Header>
        <div className={styles.main}>

          <div className={styles.cardsBlock}>

            <div className={styles.cards}>
              <Card
                title="My Cards"
                balance="$5,756"
                validationDate="12/22"
                cardHolderName="Eddy Cusuma"
                cardNumber="3778 **** **** 1234"
              >
              </Card>
              <Card
                cardLabel="+ Add"
                balance="$4,313"
                validationDate="12/22"
                cardHolderName="Eddy Cusuma"
                cardNumber="3778 **** **** 5234"
                backgroundColor="#B1B1B1"
                hideGradient={true}
              >
              </Card>
              <Card
                cardLabel="See All"
                balance="-$15,756"
                validationDate="12/22"
                cardHolderName="Eddy Cusuma"
                cardNumber="3778 **** **** 1453"
                backgroundColor="#FFC500"
                hideGradient={true}
              >
              </Card>
            </div>

            <div className={styles.transcations}>
              <h1 className={styles.transactionsTitle}>Recent Transactions</h1>
              <div className={styles.transactionsBox}>
                <div className={styles.transactionsItem}>
                  <TransactionItem
                    icon="/img/Transactions/card.svg"
                    title="Deposit from my Card"
                    date="28 January 2021"
                    amount="-$850"
                    amountColor={'#FF4B4A'}
                  />
                </div>
                <div className={styles.transactionsItem}>
                 <TransactionItem
                  icon="/img/Transactions/PayPal.svg"
                  title="Deposit Paypal"
                  date="25 January 2021"
                  amount="+$2,500"
                  amountColor={'#41D4A8'}
                  />
                </div>
                <div className={styles.transactionsItem}>
                 <TransactionItem
                  icon="/img/Transactions/dollar.svg"
                  title="Jemi Wilson"
                  date="21 January 2021"
                  amount="+$5,400"
                  amountColor={'#41D4A8'}
                  />
                  </div>
              </div>
            </div>
          </div>

          <div className={styles.activity}>
            <div className={styles.weeklyActivity}>
              <div className={styles.activityTitle}>
                <b>Weekly Activity</b>
                <div className={styles.charts}>
                  <Charts></Charts>
                </div>
              </div>
            </div>
            <div className={styles.statistics}>
              <div className={styles.statisticsTitle}>
                <b>Expense Statistics</b>
                <div className={styles.diagram}>
                  <Diagram/>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.transfer}>

            </div>
            <div className={styles.balance}>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}