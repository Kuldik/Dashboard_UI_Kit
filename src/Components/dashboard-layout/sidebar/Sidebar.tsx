import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { path: '/', name: 'Dashboard', icon: `${process.env.PUBLIC_URL}/img/SidebarIcons/dashboard.svg` },
  { path: '/transactions', name: 'Transactions', icon: `${process.env.PUBLIC_URL}/img/SidebarIcons/transactions.svg` },
  { path: '/accounts', name: 'Accounts', icon: `${process.env.PUBLIC_URL}/img/SidebarIcons/accounts.svg` },
  { path: '/investments', name: 'Investments', icon: `${process.env.PUBLIC_URL}/img/SidebarIcons/investments.svg` },
  { path: '/credit-cards', name: 'Credit Cards', icon: `${process.env.PUBLIC_URL}/img/SidebarIcons/creditCards.svg` },
  { path: '/loans', name: 'Loans', icon: `${process.env.PUBLIC_URL}/img/SidebarIcons/loans.svg` },
  { path: '/services', name: 'Services', icon: `${process.env.PUBLIC_URL}/img/SidebarIcons/Services.svg` },
  { path: '/my-privileges', name: 'My Privileges', icon: `${process.env.PUBLIC_URL}/img/SidebarIcons/MyPrivilege.svg` },
  { path: '/settings', name: 'Settings', icon: `${process.env.PUBLIC_URL}/img/SidebarIcons/settings.svg` },
];

export function Sidebar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getActiveClass = (path: string) => location.pathname === path ? styles.active : '';

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    const menu = document.querySelector(`.${styles.menu}`);
    if (menu) {
      if (isMenuOpen) {
        menu.classList.remove(styles.menuOpen);
      } else {
        menu.classList.add(styles.menuOpen);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.logoBox}>
          <img src={`${process.env.PUBLIC_URL}/img/SidebarIcons/logoCard.svg`} alt="logo" />
          <h1 className={styles.logoText}>BankDash.</h1>
        </div>
        <button className={styles.burgerMenuBtn} onClick={handleMenuToggle}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <button className={`${styles.closeMenuBtn} ${isMenuOpen ? styles.showCloseMenuBtn : ''}`} onClick={handleMenuToggle}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          {menuItems.map((item, index) => (
            <div key={index} className={`${styles.menuBox} ${getActiveClass(item.path)}`}>
              <img src={item.icon} alt="" />
              <Link to={item.path} className={styles.btn}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}