import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar.tsx'
import { Header } from '../../header/Header.tsx';
import styles from './Services.module.css'

export default function Services() {
  return (
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <div>
        <Header title="Services"></Header>
        <div className={styles.main}>

          <div className={styles.balanceBox}>
            <div className={styles.balanceItems}>
              <div className={styles.balanceItem}>
                <div className={styles.iconBox}>
                  <img src={`${process.env.PUBLIC_URL}/img/Services/lifeIns.svg`} alt="#" />
                </div>
                <div className={styles.itemsBox}>
                  <p className={styles.text}>Life Insurance</p>
                  <b className={styles.number}>Unlimited protection</b>
                </div>
              </div>
              <div className={styles.balanceItem}>
                <div className={styles.iconBox}>
                  <img src={`${process.env.PUBLIC_URL}/img/Services/shopping.svg`} alt="#" />
                </div>
                <div className={styles.itemsBox}>
                  <p className={styles.text}>Shopping</p>
                  <b className={styles.number}>Buy. Think. Grow.</b>
                </div>
              </div>
              <div className={styles.balanceItem}>
                <div className={styles.iconBox}>
                  <img src={`${process.env.PUBLIC_URL}/img/Services/safety.svg`} alt="#" />
                </div>
                <div className={styles.itemsBox}>
                  <p className={styles.text}>Safety</p>
                  <b className={styles.number}>We are your allies</b>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardList}>
              <div className={styles.listTitleBox}>
                <p className={styles.listTitle}>Bank Services List</p>
              </div>

              <div className={styles.investmentsBox}>
                <div className={styles.investmentsItems}>
                  <div className={styles.investmentsItem}>
                    <div className={styles.info}>
                      <div className={styles.icon}>
                        <img src={`${process.env.PUBLIC_URL}/img/Services/business.svg`} alt="#" />
                      </div>

                      <div className={styles.text}>
                        <p className={styles.title}>Business loans</p>
                        <p className={styles.subtitle}>It is a long established </p>
                      </div>  
                    </div>

                    <div className={styles.text}>
                        <p className={styles.title}>Lorem Ipsum</p>
                        <p className={styles.subtitle}>Many publishing</p>
                    </div>  

                    <div className={styles.bank}>
                      <p className={styles.title}>Lorem Ipsum</p>
                      <p className={styles.bankName}>Many publishing</p>
                    </div>

                    <div className={styles.card}>
                      <p className={styles.text}>Lorem Ipsum</p>
                      <p className={styles.number}>Many publishing</p>
                    </div>

                    <div className={styles.name}>
                      <p className={styles.title}>Lorem Ipsum</p>
                      <p className={styles.subTitle}>Many publishing</p>
                    </div>

                    <div className={styles.detailsBtn}>
                      <button className={styles.text}>View Details</button>
                    </div>
                  </div>

                  <div className={styles.investmentsItem}>
                    <div className={styles.info}>
                      <div className={styles.icon}>
                        <img src={`${process.env.PUBLIC_URL}/img/Services/accounts.svg`} alt="#" />
                      </div>

                      <div className={styles.text}>
                        <p className={styles.title}>Checking accounts</p>
                        <p className={styles.subtitle}>It is a long established </p>
                      </div> 
                    </div>
                    
                    <div className={styles.text}>
                        <p className={styles.title}>Lorem Ipsum</p>
                        <p className={styles.subtitle}>Many publishing</p>
                    </div>  

                    <div className={styles.bank}>
                      <p className={styles.title}>Lorem Ipsum</p>
                      <p className={styles.bankName}>Many publishing</p>
                    </div>

                    <div className={styles.card}>
                      <p className={styles.text}>Lorem Ipsum</p>
                      <p className={styles.number}>Many publishing</p>
                    </div>

                    <div className={styles.name}>
                      <p className={styles.title}>Lorem Ipsum</p>
                      <p className={styles.subTitle}>Many publishing</p>
                    </div>

                    <div className={styles.detailsBtn}>
                      <button className={styles.text}>View Details</button>
                    </div>
                  </div>

                  <div className={styles.investmentsItem}>
                    <div className={styles.info}>
                      <div className={styles.icon}>
                        <img src={`${process.env.PUBLIC_URL}/img/Services/savings.svg`} alt="#" />
                      </div>

                      <div className={styles.text}>
                        <p className={styles.title}>Savings accounts</p>
                        <p className={styles.subtitle}>It is a long established </p>
                      </div>  
                    </div>

                    <div className={styles.text}>
                        <p className={styles.title}>Lorem Ipsum</p>
                        <p className={styles.subtitle}>Many publishing</p>
                    </div>  

                    <div className={styles.bank}>
                      <p className={styles.title}>Lorem Ipsum</p>
                      <p className={styles.bankName}>Many publishing</p>
                    </div>

                    <div className={styles.card}>
                      <p className={styles.text}>Lorem Ipsum</p>
                      <p className={styles.number}>Many publishing</p>
                    </div>

                    <div className={styles.name}>
                      <p className={styles.title}>Lorem Ipsum</p>
                      <p className={styles.subTitle}>Many publishing</p>
                    </div>

                    <div className={styles.detailsBtn}>
                      <button className={styles.text}>View Details</button>
                    </div>

                  </div>

                  <div className={styles.investmentsItem}>
                    <div className={styles.info}>
                      <div className={styles.icon}>
                        <img src={`${process.env.PUBLIC_URL}/img/Services/debit.svg`} alt="#" />
                      </div>

                      <div className={styles.text}>
                        <p className={styles.title}>Debit and credit cards</p>
                        <p className={styles.subtitle}>It is a long established </p>
                      </div>  
                    </div>

                    <div className={styles.text}>
                        <p className={styles.title}>Lorem Ipsum</p>
                        <p className={styles.subtitle}>Many publishing</p>
                    </div>  

                    <div className={styles.bank}>
                      <p className={styles.title}>Lorem Ipsum</p>
                      <p className={styles.bankName}>Many publishing</p>
                    </div>

                    <div className={styles.card}>
                      <p className={styles.text}>Lorem Ipsum</p>
                      <p className={styles.number}>Many publishing</p>
                    </div>

                    <div className={styles.name}>
                      <p className={styles.title}>Lorem Ipsum</p>
                      <p className={styles.subTitle}>Many publishing</p>
                    </div>

                    <div className={styles.detailsBtn}>
                      <button className={styles.text}>View Details</button>
                    </div>

                  </div>  

                  <div className={styles.investmentsItem}>
                    <div className={styles.info}>
                      <div className={styles.icon}>
                        <img src={`${process.env.PUBLIC_URL}/img/Services/listLifeIns.svg`} alt="#" />
                      </div>

                      <div className={styles.text}>
                        <p className={styles.title}>Life Insurance</p>
                        <p className={styles.subtitle}>It is a long established </p>
                      </div>  
                    </div>

                    <div className={styles.text}>
                        <p className={styles.title}>Lorem Ipsum</p>
                        <p className={styles.subtitle}>Many publishing</p>
                    </div>  

                    <div className={styles.bank}>
                      <p className={styles.title}>Lorem Ipsum</p>
                      <p className={styles.bankName}>Many publishing</p>
                    </div>

                    <div className={styles.card}>
                      <p className={styles.text}>Lorem Ipsum</p>
                      <p className={styles.number}>Many publishing</p>
                    </div>

                    <div className={styles.name}>
                      <p className={styles.title}>Lorem Ipsum</p>
                      <p className={styles.subTitle}>Many publishing</p>
                    </div>

                    <div className={styles.detailsBtn}>
                      <button className={styles.text}>View Details</button>
                    </div>

                  </div>  

                  <div className={styles.investmentsItem}>
                    <div className={styles.info}>
                      <div className={styles.icon}>
                        <img src={`${process.env.PUBLIC_URL}/img/Services/business.svg`} alt="#" />
                      </div>

                      <div className={styles.text}>
                        <p className={styles.title}>Business loans</p>
                        <p className={styles.subtitle}>It is a long established </p>
                      </div>  
                    </div>

                    <div className={styles.text}>
                        <p className={styles.title}>Lorem Ipsum</p>
                        <p className={styles.subtitle}>Many publishing</p>
                    </div>  

                    <div className={styles.bank}>
                      <p className={styles.title}>Lorem Ipsum</p>
                      <p className={styles.bankName}>Many publishing</p>
                    </div>

                    <div className={styles.card}>
                      <p className={styles.text}>Lorem Ipsum</p>
                      <p className={styles.number}>Many publishing</p>
                    </div>

                    <div className={styles.name}>
                      <p className={styles.title}>Lorem Ipsum</p>
                      <p className={styles.subTitle}>Many publishing</p>
                    </div>

                    <div className={styles.detailsBtn}>
                      <button className={styles.text}>View Details</button>
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