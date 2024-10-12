import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar.tsx'
import { Header } from '../../header/Header.tsx';
import styles from './Accounts.module.css'
/* eslint-disable */
// @ts-ignore
import Card from '../../../UI/Card/Card.tsx'
// @ts-ignore
import Charts from '../../../Charts/TransactionsChart.jsx';
// @ts-ignore
import AccountsChart from '../../../Charts/AccountsChart.jsx';
/* eslint-enable */


const getAmountClass = (amount : string) => {
  if (amount && amount.startsWith('-')) {
    return styles.negative;
  } else {
    return styles.positive;
  }
};

const value1 = '-$150';
const value2 = '-$340';
const value3 = '+$780';

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

                  <div className={getAmountClass(value1)}>
                    {value1}
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

                <div className={getAmountClass(value2)}>
                  {value2}
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

                <div className={getAmountClass(value3)}>
                  {value3}
                </div>
                </div>

              </div>
            </div>

            <div className={styles.cardBox}>
              <Card
                title="My Card"
                balance="$5,756"
                validationDate="12/22"
                cardHolderName="Eddy Cusuma"
                cardNumber="3778 **** **** 1234"
                gradientWidth="358px" 
                gradientColor="#0A06F4"
              />
            </div>
          </div>

          <div className={styles.overviewBox}>
            <div className={styles.overviewMain}>

              <div className={styles.overviewChartBox}>
                <div className={styles.overviewTitleBox}>
                  <p className={styles.overviewTitle}>Debit & Credit Overview</p>
                </div>
                <div className={styles.overviewChart}>
                  <AccountsChart/>
                </div>
              </div>

              <div className={styles.invoiceBox}>
                <div className={styles.invoiceTitleBox}>
                  <p className={styles.invoiceTitle}>Invoices Sent</p>
                </div>
                <div className={styles.invoiceMainContainer}>
                  <div className={styles.invoiceItemContainer}>
                    <div className={styles.invoiceInfoBox}>

                      <div className={styles.iconBox}>
                        <img src="/img/Transactions/apple.svg" alt="" />
                      </div>
                      
                      <div className={styles.textBox}>
                        <b className={styles.title}>Apple Store</b>
                        <p className={styles.time}>5h ago</p>
                      </div>
                    </div>
                    <div className={styles.invoicePriceBox}>
                      <p className={styles.price}>$450</p>
                    </div>
                    
                  </div>

                  <div className={styles.invoiceItemContainer}>
                    <div className={styles.invoiceInfoBox}>

                      <div className={styles.iconBox}>
                        <img src="/img/Transactions/mike.svg" alt="" />
                      </div>
                      
                      <div className={styles.textBox}>
                        <b className={styles.title}>Michael</b>
                        <p className={styles.time}>2 days ago</p>
                      </div>
                    </div>
                    <div className={styles.invoicePriceBox}>
                      <p className={styles.price}>$160</p>
                    </div>
                    
                  </div>

                  <div className={styles.invoiceItemContainer}>
                    <div className={styles.invoiceInfoBox}>

                      <div className={styles.iconBox}>
                        <img src="/img/Transactions/ps.svg" alt="" />
                      </div>
                      
                      <div className={styles.textBox}>
                        <b className={styles.title}>Playstation</b>
                        <p className={styles.time}>5 days ago</p>
                      </div>
                    </div>
                    <div className={styles.invoicePriceBox}>
                      <p className={styles.price}>$1085</p>
                    </div>
                    
                  </div>

                  <div className={styles.invoiceItemContainer}>
                    <div className={styles.invoiceInfoBox}>

                      <div className={styles.iconBox}>
                        <img src="/img/Transactions/profile.svg" alt="" />
                      </div>
                      
                      <div className={styles.textBox}>
                        <b className={styles.title}>William</b>
                        <p className={styles.time}>10 days ago</p>
                      </div>
                    </div>
                    <div className={styles.invoicePriceBox}>
                      <p className={styles.price}>$90</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}