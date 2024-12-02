import React from 'react'
import styles from './CreateCard.module.css'
import InputField from '../InputField/InputField'
/* eslint-disable */
// @ts-ignore
import { useForm } from 'react-hook-form';
// @ts-ignore
import { toast, ToastContainer } from 'react-toastify';
/* eslint-enable */
export const CreateCard = ({
    title,
    innerTitle,
    label,
    cardType,
    nameOnCard,
    cardNumber,
    expirationDate,
    button,
    onClose
  }: {
    title?: string;
    innerTitle?: string;
    label: string;
    cardType?: boolean;
    nameOnCard?: boolean;
    cardNumber?: boolean;
    expirationDate?: boolean;
    button: string;
    onClose?: () => void;
  }) => {

    return (
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.titleBox}>
            <p className={styles.title}>{title}</p>
          </div>
  
          <div className={styles.cardCreation}>
            <div className={styles.container}>
              {innerTitle && (
                <div className={styles.titleBox}>
                  <p className={styles.title}>{innerTitle}</p>
                </div>
              )}
              <div className={styles.addCard}>
                <p className={styles.text}>{label}</p>
              </div>
  
              <div className={styles.formBox}>
                {cardType && (
                  <InputField
                    title="Card Type"
                    type="text"
                    placeholder="Classic"
                  />
                )}
                {nameOnCard && (
                  <InputField
                    title="Name On Card"
                    type="text"
                    placeholder="My Cards"
                  />
                )}
                {cardNumber && (
                  <InputField
                    title="Card Number"
                    type="number"
                    placeholder="**** **** **** ****"
                  />
                )}
                {expirationDate && (
                  <InputField
                    title="Expiration Date"
                    type="text"
                    placeholder="25 January 2025"
                  />
                )}
              </div>

              <div className={styles.btnBox}>
              <button className={styles.btn} onClick={() => {
                toast.success('Your new card has been created!', {
                  position: 'top-right',
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                if (onClose) {
                  onClose();
                }
              }}>{button}</button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
    );
  };
