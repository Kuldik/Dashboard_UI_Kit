import React, { useState } from 'react'
import { Sidebar } from '../../sidebar/Sidebar.tsx'
import { Header } from '../../header/Header.tsx';
import styles from './Transactions.module.css'
/* eslint-disable */
// @ts-ignore
import Card from '../../../UI/Card/Card.tsx'
// @ts-ignore
import Charts from '../../../Charts/TransactionsChart.jsx';
/* eslint-enable */

const transactions = [
  {
    id: '#12548796',
    type: 'expense',
    description: 'Spotify Subscription',
    card: '1234 ****',
    date: '28 Jan, 12.30 AM',
    amount: `-$2500`,
    receipt: <button className={styles.downloadBtn}>Download</button>,
  },
  {
    id: '#12548796',
    type: 'income',
    description: 'Freepik Sales',
    card: '1234 ****',
    date: '25 Jan, 10.40 PM',
    amount: `+$750`,
    receipt: <button className={styles.downloadBtn}>Download</button>,
  },
  {
    id: '#12548796',
    type: 'expense',
    description: 'Mobile Service',
    card: '1234 ****',
    date: '20 Jan, 10.40 PM',
    amount: `-$150`,
    receipt: <button className={styles.downloadBtn}>Download</button>,
  },
  {
    id: '#12548796',
    type: 'expense',
    description: 'Wilson',
    card: '1234 ****',
    date: '15 Jan, 03.29 PM',
    amount: `-$1050`,
    receipt: <button className={styles.downloadBtn}>Download</button>,
  },
  {
    id: '#12548796',
    type: 'income',
    description: 'Emilly',
    card: '1234 ****',
    date: '14 Jan, 10.40 PM',
    amount: `+$840`,
    receipt: <button className={styles.downloadBtn}>Download</button>,
  },
];
export default function Transactions() {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredTransactions = activeTab === 'all'
    ? transactions
    : transactions.filter((transaction) => transaction.type === activeTab);

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
                gradientWidth="349px" 
                gradientColor="#0A06F4"
              >
              </Card>
              <Card
                addCard="&nbsp;"
                balance="$4,313"
                validationDate="12/22"
                cardHolderName="Eddy Cusuma"
                cardNumber="3778 **** **** 5234"
                background="#B1B1B1"
                gradientWidth="349px" 
                gradientColor="#B1B1B1"
              >
              </Card>
              <Card
                addCard="+ Add Card"
                balance="-$15,756"
                validationDate="12/22"
                cardHolderName="Eddy Cusuma"
                cardNumber="3778 **** **** 1453"
                background="#FFC500"
                gradientWidth="349px" 
                gradientColor="#FFC500"
              >
              </Card>
          </div>
          <div className={styles.expense}>
            <h1 className={styles.expenseTitle}>My Expense</h1>
            <Charts></Charts>
          </div>
        </div>

        <div className={styles.transactionsTableBlock}>
          <h1 className={styles.transactionsTitle}>Transactions</h1>
          <div className={styles.transactionsTabs}>
            <button 
            className={styles.transactionsTab} 
            onClick={() => handleTabClick('all')}>All Transactions</button>

            <button 
            className={styles.transactionsTab} 
            onClick={() => handleTabClick('income')}>Income</button>

            <button 
            className={styles.transactionsTab} 
            onClick={() => handleTabClick('expense')}>Expense</button>
          </div>
          <hr className={styles.headerHr}/>
          <table className={styles.transactionsTable}>
            <thead className={styles.transactionsHead}>
              <tr className={styles.transactionsRow}>
                <th className={styles.transactionsCell}>Description</th>
                <th className={styles.transactionsCell}>Transactions ID</th>
                <th className={styles.transactionsCell}>Type</th>
                <th className={styles.transactionsCell}>Card</th>
                <th className={styles.transactionsCell}>Date</th>
                <th className={styles.transactionsCell}>Amount</th>
                <th className={styles.transactionsCell}>Receipt</th>
              </tr>
             <hr className={styles.tableHr}/>
            </thead>
            <tbody className={styles.transactionsBody}>
              {filteredTransactions.map((transaction, index) => (
                <tr key={transaction.id}>
                  <td className={styles.transactionsCellItem}>
                    <img 
                      src={`/img/Transactions/${index % 2 === 0 ? 'tableArrow.svg' : 'tableArrowDown.svg'}`} 
                      alt="arrow" 
                    />
                    {transaction.description}
                  </td>
                  <td className={styles.transactionsCellItem}>{transaction.id}</td>
                  <td className={styles.transactionsCellItem}>{transaction.type}</td>
                  <td className={styles.transactionsCellItem}>{transaction.card}</td>
                  <td className={styles.transactionsCellItem}>{transaction.date}</td>
                  <td className={styles.transactionsCellItem} style={{ color: transaction.amount.includes('+') ? '#16DBAA' : '#FE5C73' }}>
                    {transaction.amount}
                  </td>
                  <td className={styles.transactionsCellItem}>{transaction.receipt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.footer}>
          <div className={styles.footerPages}>
              <div className={styles.pagesPrev}>
                  <span className={styles.pagesPrev__arrow}>&lt;</span>
                  <span className={styles.pagesPrev__text}>Previous</span>
              </div>
              <div className={styles.pagesNumbers}>
                  {[1, 2, 3, 4].map((page, index) => (
                      <span key={index} className={styles.page}>{page}</span>
                  ))}
              </div>
              <div className={styles.pagesNext}>
                  <span className={styles.pagesNext__text}>Next</span>
                  <span className={styles.pagesNext__arrow}>&gt;</span>
              </div>
          </div>
       </div>

      </div>
    </div>
    </div>
  )
}