import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar.tsx'
import { Header } from '../../header/Header.tsx';
import styles from './CreditCard.module.css'
/* eslint-disable */
// @ts-ignore
import Card from '../../../UI/Card/Card.tsx';
// @ts-ignore
import Donut from './../../../Charts/Donut';
// @ts-ignore
import { CreateCard } from '../../../UI/CreateCard/CreateCard.tsx';
import ToastWrapper from '../../../UI/Toaster.tsx';
import { toast, ToastContainer } from 'react-toastify';
// @ts-ignore
/* eslint-enable */


export default function Transactions() {

  const handleAdd = (index: number) => {
    toast.success('Loan Repayed!');
  };
  
  return (
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <div>
        <Header title="Credit Cards"></Header>
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
                addCard="&nbsp;"
                balance="$1,250"
                validationDate="12/22"
                cardHolderName="Eddy Cusuma"
                cardNumber="3778 **** **** 1453"
                background="#2a2a2a"
                gradientWidth="349px" 
                gradientColor="#2a2a2a2f"
              >
              </Card>
              <Card
                addCard="&nbsp;"
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
          </div>

          <div className={styles.expenseBox}>
            <div className={styles.cardStats}>
              <div className={styles.statsTitleBox}>
                <p className={styles.statsTitle}>Card Expense Statistics</p>
              </div>
              <Donut></Donut>
            </div>

            <div className={styles.cardList}>
              <div className={styles.listTitleBox}>
                <p className={styles.listTitle}>Card List</p>
              </div>

              <div className={styles.investmentsBox}>
                <div className={styles.investmentsItems}>
                  <div className={styles.investmentsItem}>
                    <div className={styles.info}>
                      <div className={styles.icon}>
                        <img src="/img/Cards/blue.svg" alt="#" />
                      </div>
                    </div>

                    <div className={styles.text}>
                        <p className={styles.title}>Card Type</p>
                        <p className={styles.subtitle}>Secondary</p>
                    </div>  

                    <div className={styles.bank}>
                      <p className={styles.title}>Bank</p>
                      <p className={styles.bankName}>DBL Bank</p>
                    </div>

                    <div className={styles.card}>
                      <p className={styles.text}>Card Number</p>
                      <p className={styles.number}>**** **** 5600</p>
                    </div>

                    <div className={styles.name}>
                      <p className={styles.title}>Namian Card</p>
                      <p className={styles.subTitle}>William</p>
                    </div>

                    <div className={styles.detailsBtn}>
                      <button className={styles.text}>View Details</button>
                    </div>
                  </div>

                  <div className={styles.investmentsItem}>
                    <div className={styles.info}>
                      <div className={styles.icon}>
                        <img src="/img/Cards/pink.svg" alt="#" />
                      </div>
                    </div>

                    <div className={styles.text}>
                        <p className={styles.title}>Card Type</p>
                        <p className={styles.subtitle}>Secondary</p>
                    </div>  

                    <div className={styles.bank}>
                      <p className={styles.title}>Bank</p>
                      <p className={styles.bankName}>BRC Bank</p>
                    </div>

                    <div className={styles.card}>
                      <p className={styles.text}>Card Number</p>
                      <p className={styles.number}>**** **** 4300</p>
                    </div>

                    <div className={styles.name}>
                      <p className={styles.title}>Namian Card</p>
                      <p className={styles.subTitle}>Michel</p>
                    </div>

                    <div className={styles.detailsBtn}>
                      <button className={styles.text}>View Details</button>
                    </div>
                  </div>

                  <div className={styles.investmentsItem}>
                    <div className={styles.info}>
                      <div className={styles.icon}>
                        <img src="/img/Cards/yellow.svg" alt="#" />
                      </div>
                    </div>

                    <div className={styles.text}>
                        <p className={styles.title}>Card Type</p>
                        <p className={styles.subtitle}>Secondary</p>
                    </div>  

                    <div className={styles.bank}>
                      <p className={styles.title}>Bank</p>
                      <p className={styles.bankName}>ABM Bank</p>
                    </div>

                    <div className={styles.card}>
                      <p className={styles.text}>Card Number</p>
                      <p className={styles.number}>**** **** 7560</p>
                    </div>

                    <div className={styles.name}>
                      <p className={styles.title}>Namian Card</p>
                      <p className={styles.subTitle}>Edward</p>
                    </div>

                    <div className={styles.detailsBtn}>
                      <button className={styles.text}>View Details</button>
                    </div>

                  </div>  

                </div>
              </div>

            </div>
          </div>

          <div className={styles.cardActions}>
            <div className={styles.addCard}>
            <ToastWrapper>
                <CreateCard
                  title='Add New Card'
                  label='Credit Card generally means a plastic card issued by Scheduled Commercial 
                          Banks assigned to a Cardholder, with a credit limit, that can be used to 
                          purchase goods and services on credit or obtain cash advances.'
                  cardType={true}
                  nameOnCard={true}
                  cardNumber={true}
                  expirationDate={true}
                  button='Add Card'
                  onClose={() => console.log('Модальное окно закрыто')}
                />
              </ToastWrapper>
            </div>
            
            <div className={styles.cardSettings}>
              <div className={styles.titleBox}>
                <p className={styles.title}>Card Settings</p>
              </div>

              <div className={styles.container}>
                <div className={styles.settingsItems}>
                  <div className={styles.settingsItem}>

                    <div className={styles.iconBox}>
                      <img src="/img/Cards/yellow.svg" alt="#" />
                    </div>

                    <div className={styles.textBox}>
                      <p className={styles.title}>Block Card</p>
                      <p className={styles.subtitle}>Instantly block your card</p>
                    </div>

                  </div>

                  <div className={styles.settingsItem}>

                    <div className={styles.iconBox}>
                      <img src="/img/Cards/lock.svg" alt="#" />
                    </div>

                    <div className={styles.textBox}>
                      <p className={styles.title}>Change Pin Code</p>
                      <p className={styles.subtitle}>Choose another pin code</p>
                    </div>
                    
                  </div>

                   <div className={styles.settingsItem}>

                    <div className={styles.iconBox}>
                      <img src="/img/Cards/google.svg" alt="#" />
                    </div>

                    <div className={styles.textBox}>
                      <p className={styles.title}>Add to Google Pay</p>
                      <p className={styles.subtitle}>Withdraw without any card</p>
                    </div>
                    
                  </div>

                   <div className={styles.settingsItem}>

                    <div className={styles.iconBox}>
                      <img src="/img/Transactions/apple.svg" alt="#" />
                    </div>

                    <div className={styles.textBox}>
                      <p className={styles.title}>Add to Apple Pay</p>
                      <p className={styles.subtitle}>Withdraw without any card</p>
                    </div>
                    
                  </div>
                    
                  <div className={styles.settingsItem}>

                    <div className={styles.iconBox}>
                      <img src="/img/Transactions/apple.svg" alt="#" />
                    </div>

                    <div className={styles.textBox}>
                      <p className={styles.title}>Add to Apple Store</p>
                      <p className={styles.subtitle}>Withdraw without any card</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}