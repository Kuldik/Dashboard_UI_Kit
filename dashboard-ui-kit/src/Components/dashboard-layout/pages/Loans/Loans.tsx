import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar.tsx'
import { Header } from '../../header/Header.tsx';
import styles from './Loans.module.css'
/* eslint-disable */

export default function Transactions() {

  const data = [
    // @ts-ignore
    { slNo: '01.', loanMoney: '$100000', leftToRepay: '$40500', dutaion: '8 months', interestRate: '12%', installment: '$2000', repayBtn: <button className={styles.btn}>Repay</button> },
    { slNo: '02.', loanMoney: '$500000', leftToRepay: '$25000', dutaion: '36 months', interestRate: '10%', installment: '$8000', repayBtn: <button className={styles.btn}>Repay</button> },
    { slNo: '03.', loanMoney: '$900000', leftToRepay: '$40500', dutaion: '12 months', interestRate: '12%', installment: '$5000', repayBtn: <button className={styles.btn}>Repay</button> },
    { slNo: '04.', loanMoney: '$50000', leftToRepay: '$40500', dutaion: '25 months', interestRate: '5%', installment: '$2000', repayBtn: <button className={styles.btn}>Repay</button> },
    { slNo: '05.', loanMoney: '$50000', leftToRepay: '$40500', dutaion: '5 months', interestRate: '16%', installment: '$10000', repayBtn: <button className={styles.btn}>Repay</button> },
    { slNo: '06.', loanMoney: '$80000', leftToRepay: '$25500', dutaion: '14 months', interestRate: '8%', installment: '$2000', repayBtn: <button className={styles.btn}>Repay</button> },
    { slNo: '07.', loanMoney: '$12000', leftToRepay: '$5500', dutaion: '9 months', interestRate: '13%', installment: '$500', repayBtn: <button className={styles.btn}>Repay</button> },
    { slNo: '08.', loanMoney: '$160000', leftToRepay: '$100800', dutaion: '3 months', interestRate: '12%', installment: '$900', repayBtn: <button className={styles.btn}>Repay</button> },

  ];
/* eslint-enable */

  const total = data.reduce((acc, current) => {
    acc.loanMoney += parseInt(current.loanMoney.replace('$', ''));
    acc.leftToRepay += parseInt(current.leftToRepay.replace('$', ''));
    acc.installment += parseInt(current.installment.replace('$', ''));
    return acc;
  }, { loanMoney: 0, leftToRepay: 0, installment: 0 });

  return (
    
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <div>
        <Header title="Loans"></Header>
        <div className={styles.main}>
          <div className={styles.balanceBox}>
            <div className={styles.balanceItems}>
              <div className={styles.balanceItem}>
                <div className={styles.iconBox}>
                  <img src="/img/Loans/person.svg" alt="#" />
                </div>
                        <div className={styles.itemsBox}>
                  <p className={styles.text}>Personal Loans</p>
                  <b className={styles.number}>$50,000</b>
                </div>
              </div>
              <div className={styles.balanceItem}>
                <div className={styles.iconBox}>
                  <img src="/img/Loans/corp.svg" alt="#" />
                </div>
                <div className={styles.itemsBox}>
                  <p className={styles.text}>Corporate Loans</p>
                  <b className={styles.number}>$100,000</b>
                </div>
              </div>
              <div className={styles.balanceItem}>
                <div className={styles.iconBox}>
                  <img src="/img/Loans/business.svg" alt="#" />
                </div>
                <div className={styles.itemsBox}>
                  <p className={styles.text}>Business Loans</p>
                  <b className={styles.number}>$500,000</b>
                </div>
              </div>
              <div className={styles.balanceItem}>
                <div className={styles.iconBox}>
                  <img src="/img/Loans/custom.svg" alt="#" />
                </div>
                <div className={styles.itemsBox}>
                  <p className={styles.text}>Custom Loans</p>
                  <b className={styles.number}>Choose Money</b>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.overview}>
            <div className={styles.overviewTitleBox}>
              <p className={styles.overviewTitle}>Active Loans Overview</p>
            </div>
            <div className={styles.overviewContainer}>
             <table className={styles.table}>
                <tr className={styles.headerBox}>
                  <th className={styles.header}>SL No</th>
                  <th className={styles.header}>Loan Money</th>
                  <th className={styles.header}>Left to Repay</th>
                  <th className={styles.header}>Duration</th>
                  <th className={styles.header}>Interest rate</th>
                  <th className={styles.header}>Installment</th>
                  <th className={styles.header}>Repay</th>
                </tr>
                {data.map((item, index) => (
                  <tr key={index} className={styles.rowBox}>
                    <td className={styles.row}>{item.slNo}</td>
                    <td className={styles.row}>{item.loanMoney}</td>
                    <td className={styles.row}>{item.leftToRepay}</td>
                    <td className={styles.row}>{item.dutaion}</td>
                    <td className={styles.row}>{item.interestRate}</td>
                    <td className={styles.row}>{item.installment} / month</td>
                    <td className={styles.row}>{item.repayBtn}</td>
                  </tr>
                ))}
                <tr className={styles.rowFooterBox}>
                  <td className={styles.rowFooterItem}>Total:</td>
                  <td className={styles.rowFooterItem}>${total.loanMoney}</td>
                  <td colSpan={3} className={styles.rowFooterItem}>${total.leftToRepay}</td>
                  <td className={styles.rowFooterItem}>${total.installment} / month</td>
                </tr>
              </table>            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}