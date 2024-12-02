import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar.tsx'
import { Header } from '../../header/Header.tsx';
import styles from './Investments.module.css'
/* eslint-disable */
// @ts-ignore
import Yearly from '../../../Charts/Accounts/Yearly.jsx'
// @ts-ignore
import Monthly from '../../../Charts/Accounts/Monthly.jsx'
/* eslint-enable */

export default function Investments() {
  return (
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <div>
        <Header title="Investments"></Header>
        <div className={styles.main}>
          
          <div className={styles.balanceBox}>
            <div className={styles.balanceItems}>
              <div className={styles.balanceItem}>
                <div className={styles.iconBox}>
                  <img src="/img/Investments/amount.svg" alt="#" />
                </div>
                <div className={styles.itemsBox}>
                  <p className={styles.text}>Total Invested Amount</p>
                  <b className={styles.number}>$150,000</b>
                </div>
              </div>
              <div className={styles.balanceItem}>
                <div className={styles.iconBox}>
                  <img src="/img/Investments/number.svg" alt="#" />
                </div>
                <div className={styles.itemsBox}>
                  <p className={styles.text}>Number of Investments</p>
                  <b className={styles.number}>1,250</b>
                </div>
              </div>
              <div className={styles.balanceItem}>
                <div className={styles.iconBox}>
                  <img src="/img/Investments/return.svg" alt="#" />
                </div>
                <div className={styles.itemsBox}>
                  <p className={styles.text}>Return Value</p>
                  <b className={styles.number}>+5.80%</b>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.chartsBlock}>
            <div className={styles.chartsContainer}>
              <div className={styles.chartsTotal}>
                <div className={styles.titleBox}>
                  <p className={styles.title}>Yearly Total Investment</p>
                </div>
                <Yearly></Yearly>
              </div>

              <div className={styles.chartsTotal}>
                <div className={styles.titleBox}>
                  <p className={styles.title}>Monthly Revenue</p>
                </div>
                <Monthly></Monthly>
              </div>
            </div>
          </div>

          <div className={styles.investmentsBlock}>
            <div className={styles.investmentsContainer}>
              <div className={styles.investmentsBox}>
                <div className={styles.titleBox}>
                  <p className={styles.title}>My Investments</p>
                </div>
                <div className={styles.investmentsItems}>
                  <div className={styles.investmentsItem}>
                    <div className={styles.info}>
                      <div className={styles.icon}>
                        <img src="/img/Investments/apple.svg" alt="#" />
                      </div>
                      <div className={styles.text}>
                        <p className={styles.title}>Apple Store</p>
                        <p className={styles.subtitle}>E-commerce, Marketplace</p>
                      </div>
                    </div>

                    <div className={styles.amount}>
                      <p className={styles.number}>$54,000</p>
                      <p className={styles.text}>Envestment Value</p>
                    </div>

                    <div className={styles.return}>
                      <p className={styles.number}>+16%</p>
                      <p className={styles.text}>Return Value</p>
                    </div>
                  </div>

                  <div className={styles.investmentsItem}>
                    <div className={styles.info}>
                      <div className={styles.icon}>
                        <img src="/img/Investments/google.svg" alt="#" />
                      </div>
                      <div className={styles.text}>
                        <p className={styles.title}>Samsung Mobile</p>
                        <p className={styles.subtitle}>E-commerce, Marketplace</p>
                      </div>
                    </div>

                    <div className={styles.amount}>
                      <p className={styles.number}>$25,300</p>
                      <p className={styles.text}>Envestment Value</p>
                    </div>

                    <div className={styles.return}>
                      <p style={{ color: 'red' }} className={styles.number}>-4%</p>
                      <p className={styles.text}>Return Value</p>
                    </div>
                  </div>

                  <div className={styles.investmentsItem}>

                    <div className={styles.info}>
                      <div className={styles.icon}>
                        <img src="/img/Investments/tesla.svg" alt="#" />
                      </div>
                      <div className={styles.text}>
                        <p className={styles.title}>Tesla Motors</p>
                        <p className={styles.subtitle}>Electric Vehicles</p>
                      </div>
                    </div>

                    <div className={styles.amount}>
                      <p className={styles.number}>$8,200</p>
                      <p className={styles.text}>Envestment Value</p>
                    </div>

                    <div className={styles.return}>
                      <p className={styles.number}>+25%</p>
                      <p className={styles.text}>Return Value</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.trendingBox}>
                <div className={styles.trendingTitleBox}>
                  <p className={styles.title}>Trending Stock</p>
                </div>
                <div className={styles.tableBox}>
                  <table className={styles.table}>
                    <tr className={styles.headerBox}>
                      <th className={styles.header}>SL No</th>
                      <th className={styles.header}>Name</th>
                      <th className={styles.header}>Price</th>
                      <th className={styles.header}>Return</th>
                    </tr>
                    <tr className={styles.rowBox}>
                      <td className={styles.row}>01.</td>
                      <td className={styles.row}>Trivago</td>
                      <td className={styles.row}>$520</td>
                      <td className={styles.row} style={{ color: '#16DBAA' }}>+5%</td>
                    </tr>
                    <tr className={styles.rowBox}>
                      <td className={styles.row}>02.</td>
                      <td className={styles.row}>Canon</td>
                      <td className={styles.row}>$480</td>
                      <td className={styles.row} style={{ color: '#16DBAA' }}>+10%</td>
                    </tr>
                    <tr className={styles.rowBox}>
                      <td className={styles.row}>03.</td>
                      <td className={styles.row}>Uber Food</td>
                      <td className={styles.row}>$350</td>
                      <td className={styles.row} style={{ color: '#FE5C73' }}>-3%</td>
                    </tr>
                    <tr className={styles.rowBox}>
                      <td className={styles.row}>04.</td>
                      <td className={styles.row}>Nokia</td>
                      <td className={styles.row}>$940</td>
                      <td className={styles.row} style={{ color: '#16DBAA' }}>+2%</td>
                    </tr>
                    <tr className={styles.rowBox}>
                      <td className={styles.row}>05.</td>
                      <td className={styles.row}>Tiktok</td>
                      <td className={styles.row}>$670</td>
                      <td className={styles.row} style={{ color: '#FE5C73' }}>-12%</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}