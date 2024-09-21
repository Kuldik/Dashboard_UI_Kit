import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar.tsx'
import { Header } from '../../header/Header.tsx';
import styles from './Transactions.module.css'
/* eslint-disable */
// @ts-ignore
import Card from '../../../UI/Card/Card.jsx'
// @ts-ignore
import Charts from '../../../Charts/TransactionsChart.jsx';
/* eslint-enable */
export default function Transactions() {
  return (
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <div>
        <Header title="Transactions"></Header>
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
          <div className={styles.expense}>
            <h1 className={styles.expenseTitle}>My Expense</h1>
            <Charts></Charts>
          </div>
        </div>

        <footer>
          <div className={styles.footer}>

          </div>
        </footer>

      </div>
    </div>
    </div>
  )
}