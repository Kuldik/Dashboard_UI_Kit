import React, { useState } from 'react';
/* eslint-disable */
import { Sidebar } from '../../sidebar/Sidebar';
import { Header } from '../../header/Header';
// @ts-ignore
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Loans.module.css';
/* eslint-enable */
interface Loan {
  slNo: string;
  loanMoney: string;
  leftToRepay: string;
  dutaion: string;
  interestRate: string;
  installment: string;
}

interface Total {
  loanMoney: number;
  leftToRepay: number;
  installment: number;
}

const Loans: React.FC = () => {
  const { register, handleSubmit } = useForm();
  
  const handleRepay = (index: number) => {
    setData(data.filter((item, i) => i !== index));
    toast.success('Loan Repayed!');
  };

  const [data, setData] = useState([
    { slNo: '01.', loanMoney: '$100000', leftToRepay: '$40500', dutaion: '8 months', interestRate: '12%', installment: '$2000' },
    { slNo: '02.', loanMoney: '$500000', leftToRepay: '$25000', dutaion: '36 months', interestRate: '10%', installment: '$8000' },
    { slNo: '03.', loanMoney: '$900000', leftToRepay: '$40500', dutaion: '12 months', interestRate: '12%', installment: '$5000' },
    { slNo: '04.', loanMoney: '$50000', leftToRepay: '$40500', dutaion: '25 months', interestRate: '5%', installment: '$2000' },
    { slNo: '05.', loanMoney: '$50000', leftToRepay: '$40500', dutaion: '5 months', interestRate: '16%', installment: '$10000' },
    { slNo: '06.', loanMoney: '$80000', leftToRepay: '$25500', dutaion: '14 months', interestRate: '8%', installment: '$2000' },
    { slNo: '07.', loanMoney: '$12000', leftToRepay: '$5500', dutaion: '9 months', interestRate: '13%', installment: '$500' },
    { slNo: '08.', loanMoney: '$160000', leftToRepay: '$100800', dutaion: '3 months', interestRate: '12%', installment: '$900' },
  ]);

  const total: Total = data.reduce((acc, current) => {
    acc.loanMoney += parseInt(current.loanMoney.replace('$', ''));
    acc.leftToRepay += parseInt(current.leftToRepay.replace('$', ''));
    acc.installment += parseInt(current.installment.replace('$', ''));
    return acc;
  }, { loanMoney: 0, leftToRepay: 0, installment: 0 });

  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div>
        <Header title="Loans" />
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
                    <td className={styles.row}>
                      <button className={styles.btn} onClick={() => handleRepay(index)}>Repay</button>
                    </td>
                  </tr>
                ))}
                <tr className={styles.rowFooterBox}>
                  <td className={styles.rowFooterItem}>Total:</td>
                  <td className={styles.rowFooterItem}>${total.loanMoney.toLocaleString()}</td>
                  <td colSpan={3} className={styles.rowFooterItem}>${total.leftToRepay.toLocaleString()}</td>
                  <td className={styles.rowFooterItem}>${total.installment.toLocaleString()} / month</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Loans;
