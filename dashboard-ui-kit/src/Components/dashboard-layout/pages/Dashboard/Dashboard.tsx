import React , { useState, useMemo } from 'react';
import { Sidebar } from '../../sidebar/Sidebar.tsx';
import { Header } from '../../header/Header.tsx';
import styles from './Dashboard.module.css'
/* eslint-disable */
// @ts-ignore
import Card from '../../../UI/Card/Card.tsx';
// @ts-ignore
import TransactionItem from '../../../UI/TransactionItem/TransactionItem.tsx';
// @ts-ignore
import Charts from '../../../Charts/Chart.jsx';
// @ts-ignore
import Diagram from '../../../Charts/Diagram.jsx';
// @ts-ignore
import TransferItem from '../../../UI/TransferItem/TransferItem.tsx';
// @ts-ignore
import Linear from '../../../Charts/Linear.jsx';
// @ts-ignore
import { Carousel } from 'react-responsive-carousel';
/* eslint-enable */

export default function Overview() {

  const workersList = useMemo(() => [
    { name: "Livia Bator", position: "CEO", icon: "/img/Transfer/firstItem.png" },
    { name: "Randy Press", position: "Director", icon: "/img/Transfer/secondItem.png" },
    { name: "Workman", position: "Designer", icon: "/img/Transfer/thirdItem.png" },
    { name: "Livia Bator", position: "CEO", icon: "/img/Transfer/firstItem.png" },
    { name: "Randy Press", position: "Director", icon: "/img/Transfer/secondItem.png" },
    { name: "Workman", position: "Designer", icon: "/img/Transfer/thirdItem.png" },
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleWorkers = workersList.slice(currentIndex, currentIndex + 3);

  if (visibleWorkers.length < 3) {
    const remainingWorkers = 3 - visibleWorkers.length;
    const additionalWorkers = workersList.slice(0, remainingWorkers);
    visibleWorkers.push(...additionalWorkers);
  }

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % workersList.length;
    setCurrentIndex(nextIndex);
  };

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
                seeAll="See All"
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

            <div className={styles.cardsMobile}>
              <Carousel
                 showArrows={false}
                 showStatus={false}
                 showIndicators={false}
                 showThumbs={false}
                 infiniteLoop={true}
                 swipeable={true}
                 className={styles.cards}
                 centerMode={true}
                 centerSlidePercentage={100 / 3}
            >
              {[
                {
                  id: 1,
                  title: "My Cards",
                  balance: "$5,756",
                  validationDate: "12/22",
                  cardHolderName: "Eddy Cusuma",
                  cardNumber: "3778 **** **** 1234",
                  gradientWidth: "349px",
                  gradientColor: "#0A06F4",
                },
                {
                  id: 2,
                  title: "My Cards",
                  balance: "$5,756",
                  validationDate: "12/22",
                  cardHolderName: "Eddy Cusuma",
                  cardNumber: "3778 **** **** 1234",
                  gradientWidth: "349px",
                  gradientColor: "#0A06F4",
                },
                {
                  id: 3,
                  title: "My Cards",
                  balance: "$5,756",
                  validationDate: "12/22",
                  cardHolderName: "Eddy Cusuma",
                  cardNumber: "3778 **** **** 1234",
                  gradientWidth: "349px",
                  gradientColor: "#0A06F4",
                },
              ].map((card) => (
                <Card key={card.id} {...card} />
              ))}
            </Carousel>
            </div>

            <div className={styles.transactions}>
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
            <div className={styles.quickTransfer}>
              <div className={styles.transferTitle}>
                <b>Quick Transfer</b>
              </div>
              <div className={styles.transferContainer}>
                <div className={styles.transferList}>
                  <div className={styles.workersList}>
                    {visibleWorkers.map((worker, index) => (
                    <TransferItem
                      key={index}
                      name={worker.name}
                      position={worker.position}
                      icon={worker.icon}
                    />
                  ))}
                  <button className={styles.transeferArrow} onClick={handleNextClick}>
                    <img src="/img/Transfer/arrowNext.svg" alt="arrow" />
                  </button>
                </div>
                  <div className={styles.sendForm}>
                    <b>Write Amount</b>
                    <div className={styles.inputItem}>
                      <input type='number' placeholder="0.00" />
                      <button>
                        <b>Send</b>
                        <img src="/img/Transactions/telegram.svg" alt="tg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.balanceHistory}>
              <div className={styles.balanceTitle}>
               <b>Balance History</b>
              </div>
              <div className={styles.balanceContainer}>
                <Linear/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}